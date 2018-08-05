import React from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {mapToArr} from '../../../utils';
import CityCardWrapper from './CityCardWrapper';
import Loader from '../../Loader';

class CitiesList extends React.Component {
    render() {
        const {cities, isLoading} = this.props;
        const loader = isLoading ? <Loader/> : null;

        if (!cities.length) return (
            <div>
                <h5 className='text-center'>Вы еще не добавили ни одного города</h5>
                {loader}
            </div>
        );

        const citiesCard = cities.map(city => (
            <CityCardWrapper key={city.id}
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
}))(DragDropContext(HTML5Backend)(CitiesList))
