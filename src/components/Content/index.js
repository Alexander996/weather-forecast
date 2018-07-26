import React from 'react';

import AddNewCity from './AddNewCity'
import CitiesList from './CitiesList'

export default class Content extends React.Component {
    render() {
        return (
            <div className='container'>
                <AddNewCity/>
                <CitiesList/>
            </div>
        )
    }
}
