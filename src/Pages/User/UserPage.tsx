import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, User } from '../../Data/UserData';

const UserPage = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUser(Number(id));
    if (user) {
      setCurrentUser(user);
    } else {
      navigate('/users');
    }
  }, []);
  return (
    <div>
      Username:
      {currentUser?.username}
    </div>
  );
};

export default UserPage;
