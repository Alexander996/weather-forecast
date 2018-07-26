import React from 'react';

import './style.css'

export default class AddNewCity extends React.Component {
    state = {
        cityName: ''
    };

    render() {
        return (
            <form className='add-new-city__form'>
                <div className='form-row align-items-center justify-content-md-center'>
                    <div className='col-6'>
                        <input type='text'
                               placeholder='Введите название города'
                               className='form-control'
                               value={this.state.name}
                               onChange={this.changeCityName}/>
                    </div>
                    <div className='col-auto'>
                        <button type='submit'
                                className='btn btn-primary'
                                onClick={this.handleSubmit}>Добавить
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    changeCityName = (event) => {
        this.setState({cityName: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
    }
}
