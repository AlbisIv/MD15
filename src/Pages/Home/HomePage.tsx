import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <h1
        className={styles.header}
      >
        Home Page
      </h1>
      <span>A page for all your Rick&Morty needs</span>
    </div>
  );
};

export default HomePage;
