import {
  WEATHER_API_LOADING,
  WEATHER_API_SUCCESS,
  WEATHER_API_FAILURE,
} from '../types';

const initialState = {
  response: [],
  loading: false,
  error: '',
};

// http://api.openweathermap.org/data/2.5/forecast?q={city%20venice},{country%20it}&APPID=584cacba334a56b975b21c8273d6ad2f

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case WEATHER_API_LOADING:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        response: payload,
      };
    case WEATHER_API_FAILURE:
      return {
        ...state,
        loading: false,
        response: [],
        error: payload,
      };

    default:
      return state;
  }
}