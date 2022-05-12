import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../Models/CharacterModel';
import './CharactersPage.scss';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [searchText, setSearchText] = useState<string>();

  const getCharacters = async (search?:string) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character${search ? `?status=${search}` : ''}`);
      setVisibleCharacters(response.data.results);
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
    } finally {
      console.log('beigas');
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    getCharacters(searchText);
  }, []);
  useEffect(() => {
    getCharacters(searchText);
  }, [searchText]);
  return (

    <div className="characters__maincontainer">
      <h1>Characters Page</h1>
      <div className="btn__container">
        <button
          onClick={() => {
            setSearchText('');
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setSearchText('alive');
          }}
        >
          Alive
        </button>
        <button
          onClick={() => {
            setSearchText('dead');
          }}
        >
          Dead
        </button>
        <button
          onClick={() => {
            setSearchText('unknown');
          }}
        >
          Unknown
        </button>
      </div>
      <div className="characters__container__cards">
        {visibleCharacters && visibleCharacters.map((character) => (
          <div
            className={`character__card ${character.status}`}
            key={Math.random()}
          >
            <div className="character__card__top">
              <img className="character__picture" src={character.image} alt={character.name} />
              <span>
                ID:
                {' '}
                {character.id}
              </span>
              <span>
                Name:
                {' '}
                {character.name}
              </span>
            </div>
            <button
              className="btn-grad"
              onClick={() => navigate(`/characters/${character.id}`)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
      {errorMessage && (<span>{errorMessage}</span>)}

    </div>
  );
};

export default CharactersPage;
