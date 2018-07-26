import React from 'react';

import {WEATHER_ICON_URL} from '../../../../consts';
import './style.css';

export default class CityCard extends React.Component {
    render() {
        const {city} = this.props;

        return (
            <div className='city-card__wrapper col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                <div className='city-card'>
                    <h5>{city.name}</h5>
                    <div>Температура: {Math.round(city.main.temp)}</div>
                    <div>Мин. температура: {city.main.temp_min}</div>
                    <div>Макс. температура: {city.main.temp_max}</div>
                    <div>{city.weather[0].description} {this.getWeatherIcon()}</div>
                </div>
            </div>
        )
    }

    getWeatherIcon() {
        const {city} = this.props;
        const url = `${WEATHER_ICON_URL}/${city.weather[0].icon}.png`;
        return <img src={url} alt='icon'/>
    }
}
