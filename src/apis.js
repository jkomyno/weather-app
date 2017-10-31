import config from './config';

export const getWeatherInfo = async ({ city }) => {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  const appIdParam = `appid=${config.WEATHER_KEY}`;

  const url = `${baseUrl}?q=${city}&${appIdParam}`;

  try {
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      }
    });
    return result.data;
  } catch (error) {
    throw error;
  }
}