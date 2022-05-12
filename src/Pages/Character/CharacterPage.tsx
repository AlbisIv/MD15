import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Character } from '../../Models/CharacterModel';
// import { Character, getCharacter } from '../../Data/CharacterData';
import './CharacterPage.scss';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { id } = useParams();
  const navigate = useNavigate();

  const getCharacter = async (ids?:string) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character${ids ? `/${ids}` : ''}`);
      setCurrentCharacter(response.data);
      console.log(response.data);
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

  useEffect(() => {
    getCharacter(id);
  }, []);
  useEffect(() => {
    getCharacter(id);
  }, [currentCharacter]);

  return (
    <div className="characters__maincontainer">
      {currentCharacter
      && (
      <div className="character__container">
        <img
          src={currentCharacter?.image}
          alt={currentCharacter?.name}
        />
        <span>
          Name:
          {' '}
          {currentCharacter?.name}
        </span>
        <span>
          Status:
          {' '}
          {currentCharacter?.status}
        </span>
        <span>
          Species:
          {' '}
          {currentCharacter?.species}
        </span>
        <span>
          Gender:
          {' '}
          {currentCharacter?.gender}
        </span>
        <span>
          Origin:
          {' '}
          {currentCharacter?.origin.name}
        </span>
        <span>
          Location:
          {' '}
          {currentCharacter?.location.name}
        </span>
        <span>
          Created:
          {' '}
          {currentCharacter?.created}
        </span>
      </div>
      )}
      {errorMessage && (<h3>{errorMessage}</h3>)}
      <button
        onClick={() => navigate(`/../characters/${(Number(id) - 1).toString()}`)}
        className="previous__btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          style={{ fill: 'rgba(247, 169, 26, 0.767)', transform: '', msFilter: '' }}
        >
          <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
        </svg>
      </button>
      <button
        onClick={() => navigate(`/../characters/${(Number(id) + 1).toString()}`)}
        className="next__btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          style={{ fill: 'rgba(247, 169, 26, 0.767)', transform: '', msFilter: '' }}
        >
          <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
        </svg>
      </button>
    </div>
  );
};
export default CharacterPage;
