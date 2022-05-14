import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <h1>About Page</h1>
      <span>A comprehensive about page</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae iure quis ratione architecto deleniti!</span>
      {/* <button
        onClick={() => navigate('/about/third-route')}
      >
        Show Home
      </button>
      <button
        onClick={() => navigate('/about/second-route')}
      >
        Show Users
      </button>
      <Outlet /> */}
    </div>
  );
};

export default AboutPage;
