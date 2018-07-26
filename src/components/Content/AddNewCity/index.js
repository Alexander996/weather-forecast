import React from 'react';
import {connect} from 'react-redux';

import {addCity} from '../../../AC/cities';
import './style.css';

class AddNewCity extends React.Component {
    state = {
        cityName: ''
    };

    render() {
        return (
            <form className='add-new-city__form'>
                <div className='form-row  justify-content-md-center'>
                    <div className='col-6'>
                        <input type='text'
                               placeholder='Введите название города'
                               className='form-control'
                               value={this.state.cityName}
                               onChange={this.changeCityName}/>
                        <small className="form-text text-danger add-new-city__form__help-text">
                            {this.getErrorText()}
                        </small>
                    </div>
                    <div className='col-auto'>
                        <button type='submit'
                                className='btn btn-primary'
                                onClick={this.handleSubmit}
                                disabled={this.getDisabledState()}>Добавить
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    changeCityName = (event) => {
        this.setState({cityName: event.target.value})
    };

    getErrorText() {
        const {error} = this.props;
        if (!error) return null;
        return 'Город не найден'
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addCity(this.state.cityName);
        this.setState({cityName: ''});
    };

    getDisabledState() {
        return !this.state.cityName
    }
}

export default connect((state) => ({
    error: state.cities.error
}), {addCity})(AddNewCity)
