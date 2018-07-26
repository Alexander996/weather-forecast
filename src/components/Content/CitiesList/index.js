import React from 'react';
import {connect} from 'react-redux';

import {mapToArr} from '../../../utils';
import CityCard from './CityCard'

class CitiesList extends React.Component {
    render() {
        const {cities, isLoading} = this.props;
        if (isLoading) return <div>Loading...</div>;

        const citiesCard = cities.map(city => (
            <CityCard key={city.id}
                      city={city}/>
        ));

        return (
            <div className='row'>
                {citiesCard}
            </div>
        )
    }
}

export default connect((state) => ({
    cities: mapToArr(state.cities.cities),
    isLoading: state.cities.isLoading
}))(CitiesList)
