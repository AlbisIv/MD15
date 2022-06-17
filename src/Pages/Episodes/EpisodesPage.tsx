import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Episode } from '../../Models/EpisodeModel';
import './EpisodesPage.scss';

const EpisodesPage = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<Episode[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [inputValue, setInputValue] = useState('');

  const getEpisodes = async (search?: string) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode${search ? `?name=${search}` : ''}`);
      setVisibleEpisodes(response.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setErrorMessage('Nothing to show');
        } else {
          setErrorMessage(error.message);
        }
        console.log(error.message);
      } else {
        setErrorMessage('Not axios error');
      }
      console.log(error);
    }
  };
  useEffect(() => {
    getEpisodes();
  }, []);

  return (

    <div className="episodes__maincontainer">
      <h1 className="episodes__title">Episodes Page</h1>
      <div className="input__box">
        <input
          className="input"
          placeholder="Search by name"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          type="text"
        />
        <button
          className="btn btn-alive"
          onClick={() => {
            getEpisodes(inputValue);
            setInputValue('');
            setErrorMessage('');
          }}
        >
          Search
        </button>
        <br />
      </div>
      {errorMessage && (
      <span
        style={{ alignSelf: 'center' }}
      >
        {errorMessage}
      </span>
      )}

      <div className="episodes__container__cards">
        {visibleEpisodes && visibleEpisodes.map((episode) => (
          <div
            className="episode__card"
            key={episode.id}
          >
            <div className="episode__card__top">
              <span>
                ID:
                {' '}
                {episode.id}
              </span>
              <span>
                Name:
                {' '}
                {episode.name}
              </span>
              <span>
                Air date:
                {' '}
                {episode.air_date}
              </span>
              <span>
                Episode:
                {' '}
                {episode.episode}
              </span>
              <span>
                Created:
                {' '}
                {episode.created}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesPage;
