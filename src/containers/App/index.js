import React, { Component } from 'react';
import Header from '../Header';
import WeatherInfo from '../WeatherInfo';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <div class="bg-color">
          <Header />
          <WeatherInfo />
        </div>
      </div>
    );
  }
}

export default App;
