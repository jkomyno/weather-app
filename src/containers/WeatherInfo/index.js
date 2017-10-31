import React, { Component } from 'react';
import './index.css';

class WeatherInfo extends Component {
  render() {
    const [temp, cityName] = ['12 C', 'Venice'];
    return (
      <div className="information">
        <h1 className="center">{temp}</h1>
        <h2 className="center">{cityName}</h2>
        <span className="today">
          Today, 9:32 pm
        </span>
      </div>
    );
  }
}

export default WeatherInfo;
