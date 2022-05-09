import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, User } from '../../Data/UserData';

const UsersPage = () => {
  const [visibleUsers, setVisibleUsers] = useState<User[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const users = getUsers();
    setVisibleUsers(users);
  }, []);
  return (

    <div>
      <h1>Users Page</h1>
      <div>
        {visibleUsers && visibleUsers.map((user) => (
          <div>
            <span>{user.id}</span>
            <span>{user.username}</span>
            <button
              onClick={() => navigate(`/users/${user.id}`)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
