import { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { register } from 'app/slices/auth';
import { clearMessage } from 'app/slices/message';
import { ICredentials } from 'app/services/auth.service';

const initialValues: ICredentials = {
  username: '',
  password: '',
  email: '',
};

export const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const dispatch = useAppDispatch();
  const { message } = useAppSelector(state => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test('len', 'The username must be between 3 and 20 characters.', val => {
        if (!val || !val.trim().length) return true;

        return val.toString().length >= 3 && val.toString().length <= 20;
      })
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test('len', 'The password must be between 6 and 40 characters.', val => {
        if (!val || !val.trim().length) return true;

        return val.toString().length >= 6 && val.toString().length <= 40;
      })
      .required('This field is required!'),
  });

  const handleRegister = (formValue: ICredentials) => {
    const { username, password, email } = formValue;

    setSuccessful(false);

    dispatch(register({ username, password, email }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className="grid justify-center items-center h-screen">
      <div className="bg-white md:w-96 p-9 rounded-xl shadow-xl m-4">
        <h1 className="font-bold mb-4 text-center text-2xl">Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid gap-2">
                <label htmlFor="email" className="capitalize">
                  email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email..."
                  className={`border-2 rounded-md px-3 py-2 ${
                    errors.email && touched.email && 'border-red-300'
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="username" className="capitalize">
                  username
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username..."
                  className={`border-2 rounded-md px-3 py-2 ${
                    errors.username && touched.username && 'border-red-300'
                  }`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="capitalize">
                  password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password..."
                  className={`border-2 rounded-md px-3 py-2 ${
                    errors.password && touched.password && 'border-red-300'
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="grid mt-4">
                <button className="bg-green-400 rounded-md text-white py-2 shadow-lg shadow-green-300">
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-8">
          Have an account? Login{' '}
          <a href="/" className="text-green-400 hover:underline">
            here
          </a>
          .
        </div>
        {message && (
          <div
            className="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex justify-between"
            role="alert"
          >
            <span className="block sm:inline">{message}</span>
            <span>
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
