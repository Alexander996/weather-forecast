import React from 'react';

import CityCard from '../CityCard';
import CityCardDrop from './CityCardDrop'
import './style.css';

export default class CityCardWrapper extends React.Component {
    render() {
        return (
            <div className='city-card__wrapper col-sm-12 col-md-6 col-lg-4'>
                <div className='row margin-null'>
                    <CityCardDrop before city={this.props.city}/>
                    <div className='city-card__wrapper__content col-10'>
                        <CityCard city={this.props.city}/>
                    </div>
                    <CityCardDrop city={this.props.city}/>
                </div>
            </div>
        )
    }
}
