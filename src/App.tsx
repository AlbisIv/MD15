import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import AboutPage from './Pages/About/AboutPage';
import Page404 from './Pages/404/Page404';
import CharactersPage from './Pages/Characters/CharactersPage';
import CharacterPage from './Pages/Character/CharacterPage';
import EpisodesPage from './Pages/Episodes/EpisodesPage';

const App = () => (
  <Router>
    <header>
      <nav className="navigation">
        <NavLink className={({ isActive }) => (isActive ? 'link link--active' : 'link')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link link--active' : 'link')} to="/characters">Characters</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link link--active' : 'link')} to="/episodes">Episodes</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link link--active' : 'link')} to="/about">About</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />

      <Route path="*" element={<Page404 />} />
    </Routes>

  </Router>

);

export default App;
