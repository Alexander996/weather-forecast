import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'

import Content from '../Content/index';
import store from '../../store'

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Content/>
            </Provider>
        )
    }
}
