import { REQUEST_WEATHER_INFO } from '../types';

export const getWeatherInfo = ({ city }) => ({
  type: REQUEST_WEATHER_INFO,
  payload: {
    city,
  },
});
