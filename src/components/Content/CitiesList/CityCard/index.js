import React from 'react';
import {connect} from 'react-redux';

import {WEATHER_ICON_URL} from '../../../../consts';
import {deleteCity} from '../../../../AC/cities';
import {getTemperature} from '../../../../utils';
import './style.css';

class CityCard extends React.Component {
    render() {
        const {city} = this.props;

        return (
            <div className='city-card__wrapper col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                <div className='city-card'>
                    <h5>{city.name}</h5>
                    <div>Температура: {getTemperature(city.main.temp)}</div>
                    <div>Мин. температура: {getTemperature(city.main.temp_min)}</div>
                    <div>Макс. температура: {getTemperature(city.main.temp_max)}</div>
                    <div>{city.weather[0].description} {this.getWeatherIcon()}</div>
                    <img src={process.env.PUBLIC_URL + '/delete.png'}
                         alt='delete'
                         className='city-card__delete-icon'
                         onClick={this.handleDeleteCity}/>
                </div>
            </div>
        )
    }

    getWeatherIcon() {
        const {city} = this.props;
        const url = `${WEATHER_ICON_URL}/${city.weather[0].icon}.png`;
        return <img src={url} alt='icon'/>
    }

    handleDeleteCity = () => {
        const {city, deleteCity} = this.props;
        deleteCity(city.id)
    }
}

export default connect(null, {deleteCity})(CityCard)
