import React from 'react';

import './style.css'

export default class Loader extends React.Component {
    render() {
        return (
            <div className='loader-wrapper'>
                <div className='loader'></div>
            </div>
        )
    }
}
