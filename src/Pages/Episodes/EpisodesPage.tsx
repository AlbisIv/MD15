import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEpisodes, Episode } from '../../Data/EpisodeData';
import './EpisodesPage.scss';

const EpisodesPage = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<Episode[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const episodes = getEpisodes();
    setVisibleEpisodes(episodes);
  }, []);
  return (

    <div className="episodes__maincontainer">
      <h1 className="episodes__title">Episodes Page</h1>
      <div className="episodes__container__cards">
        {visibleEpisodes && visibleEpisodes.map((episode) => (
          <div
            className="episode__card"
            key={Math.random()}
          >
            <div className="episode__card__top">
              {/* <img className="Episode__picture" src={episode.image} alt={episode.name} /> */}
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
            {/* <button
              className="btn-grad"
              onClick={() => navigate(`/episodes/${episode.id}`)}
            >
              Read more
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesPage;
