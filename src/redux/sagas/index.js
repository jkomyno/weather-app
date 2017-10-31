import { takeEvery } from 'redux-saga/effects';
import { REQUEST_WEATHER_INFO } from '../types';
import { getWeatherInfoSaga } from './weather';

function* rootSaga() {
  yield [
    yield takeEvery(REQUEST_WEATHER_INFO, getWeatherInfoSaga),
  ];
}

export default rootSaga;
