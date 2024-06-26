import { memo } from 'react';
import { Cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store';
import { City } from '../../types/city';
import CitiesElement from '../cities-element/cities-element';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(Cities).map((city) => (
        <CitiesElement
          key={city.name}
          city={city}
          onCityChange={handleCityChange}
        />
      ))}
    </ul>
  );
}

const memoizedCitiesList = memo(CitiesList);

export default memoizedCitiesList;
