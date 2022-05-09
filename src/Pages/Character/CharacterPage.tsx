import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Character, getCharacter } from '../../Data/CharacterData';
import './CharacterPage.scss';

const CharacterPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const character = getCharacter(Number(id));
    if (character) {
      setCurrentCharacter(character);
    } else {
      navigate('/characters');
    }
  }, []);
  return (
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
  );
};

export default CharacterPage;
