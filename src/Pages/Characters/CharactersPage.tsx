import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters, Character } from '../../Data/CharacterData';
import './CharactersPage.scss';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const characters = getCharacters();
    setVisibleCharacters(characters);
  }, []);
  return (

    <div className="characters__maincontainer">
      <h1>Characters Page</h1>
      <div className="characters__container__cards">
        {visibleCharacters && visibleCharacters.map((character) => (
          <div
            className="character__card"
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
    </div>
  );
};

export default CharactersPage;
