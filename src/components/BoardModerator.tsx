import UserService from 'app/services/user.service';
import { useState, useEffect } from 'react';

const BoardModerator = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getModeratorBoard().then(
      response => {
        setContent(response.data);
      },
      error => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      },
    );
  }, []);

  return (
    <div className="container h-screen bg-green-100 grid place-items-center">
      <header className="text-3xl font-bold">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardModerator;
