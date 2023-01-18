import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';

const Profile = () => {
  const { user: currentUser } = useAppSelector(state => state.auth);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid justify-center items-center h-screen">
      <div className="bg-white md:w-96 p-9 rounded-xl shadow-xl m-4 bg-gray-700">
        <h1>{currentUser.username}</h1>
        <p>ID: {currentUser.id}</p>
        <p>Email: {currentUser.email}</p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role: any, index: number) => (
              <li key={index}>{role}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
