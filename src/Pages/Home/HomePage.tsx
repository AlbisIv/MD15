import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="character__container">
      <h1>Home Page</h1>
      <span>A page for all your Rick&Morty needs</span>
      <br />
      <button
        onClick={() => navigate('/about')}
      >
        Learn more
      </button>
    </div>
  );
};

export default HomePage;
