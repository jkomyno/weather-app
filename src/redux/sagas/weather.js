import { put, call } from 'redux-saga/effects';
import { getWeatherInfo } from '../../apis';
import {
  WEATHER_API_LOADING,
  WEATHER_API_SUCCESS,
  WEATHER_API_FAILURE,
} from '../types';

export function* getWeatherInfoSaga({ city }) {
  try {
    const result = yield call(getWeatherInfo, { city });

    yield put({
      type: WEATHER_API_SUCCESS,
      payload: result,
    });
  } catch (error) {
    yield put({
      type: WEATHER_API_FAILURE,
      payload: error,
    });
  }
}