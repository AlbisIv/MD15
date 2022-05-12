import React, { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Location } from '../../Models/LocationModel';

const LocationsPage = () => {
  const [locations, setLocations] = useState<Location[]>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const getLocations = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/location');
      setLocations(response.data.results);
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
    getLocations();
  }, []);
  return (
    <div className="characters__maincontainer">
      <h1>Locations Page</h1>
      <div className="characters__container__cards">
        {locations && locations.map((location) => (

          <div
            key={Math.random()}
            className="character__card"
          >
            <h3>{location.name}</h3>
            <p>
              Type:
              {' '}
              {location.type}
            </p>
            <p>
              Dimension:
              {' '}
              {location.dimension}
            </p>
          </div>
        ))}
      </div>

      {errorMessage && (<span>{errorMessage}</span>)}

    </div>
  );
};

export default LocationsPage;
