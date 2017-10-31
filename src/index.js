import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './redux/store';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

/*
layout: https://codepen.io/JoanezAndrades/pen/KzbXjZ?editors=1100
sagas: https://codepen.io/lednhatkhanh/pen/MJjXeL?editors=1010
*/