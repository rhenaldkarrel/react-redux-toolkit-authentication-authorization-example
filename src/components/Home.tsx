import UserService from 'app/services/user.service';
import { useEffect, useState } from 'react';

const Home = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getPublicContent()
      .then(res => setContent(res.data))
      .catch(error => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      });
  }, []);

  return (
    <div className="h-screen grid place-items-center">
      <header className="text-3xl font-bold">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
