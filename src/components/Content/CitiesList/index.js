import React from 'react';
import {connect} from 'react-redux';

import {mapToArr} from '../../../utils';
import CityCard from './CityCard';
import Loader from '../../Loader';

class CitiesList extends React.Component {
    render() {
        const {cities, isLoading} = this.props;
        const loader = isLoading ? <Loader/> : null;

        if (!cities.length) return (
            <div>
                <h5>Вы еще не добавили ни одного города</h5>
                {loader}
            </div>
        );

        const citiesCard = cities.map(city => (
            <CityCard key={city.id}
                      city={city}/>
        ));

        return (
            <div className='row'>
                {citiesCard}
                {loader}
            </div>
        )
    }
}

export default connect((state) => ({
    cities: mapToArr(state.cities.cities),
    isLoading: state.cities.isLoading
}))(CitiesList)
