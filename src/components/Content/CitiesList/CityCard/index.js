import React from 'react';
import {connect} from 'react-redux';
import {DragSource} from 'react-dnd';

import {WEATHER_ICON_URL} from '../../../../consts';
import {deleteCity, refreshCity} from '../../../../AC/cities';
import {getTemperature} from '../../../../utils';
import {ItemTypes} from '../../../../consts';
import './style.css';

const cityCardSource = {
    beginDrag(props) {
        return {
            cityId: props.city.id
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class CityCard extends React.Component {
    render() {
        const {city, connectDragSource, isDragging} = this.props;

        return connectDragSource(
            <div className='city-card'
                 style={{opacity: isDragging ? 0.5 : 1}}>
                <h5>{city.name}</h5>
                <div>Температура: {getTemperature(city.main.temp)}</div>
                <div>Мин. температура: {getTemperature(city.main.temp_min)}</div>
                <div>Макс. температура: {getTemperature(city.main.temp_max)}</div>
                <div>{city.weather[0].description} {this.getWeatherIcon()}</div>
                <img src={process.env.PUBLIC_URL + '/refresh.png'}
                     alt='refresh'
                     className='city-card__refresh-icon city-card__icon_hover'
                     onClick={this.handleRefreshCity}/>
                <img src={process.env.PUBLIC_URL + '/delete.png'}
                     alt='delete'
                     className='city-card__delete-icon city-card__icon_hover'
                     onClick={this.handleDeleteCity}/>
            </div>
        )
    }

    getWeatherIcon() {
        const {city} = this.props;
        const url = `${WEATHER_ICON_URL}/${city.weather[0].icon}.png`;
        return <img src={url} alt='icon'/>
    }

    handleRefreshCity = () => {
        const {city, refreshCity} = this.props;
        refreshCity(city.id)
    };

    handleDeleteCity = () => {
        const {city, deleteCity} = this.props;
        deleteCity(city.id)
    }
}

export default connect(null, {
    deleteCity,
    refreshCity
})(DragSource(ItemTypes.CITY_CARD, cityCardSource, collect)(CityCard))
