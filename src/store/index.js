import {createStore, applyMiddleware} from 'redux';

import reducer from '../reducers';
import api from '../middlewares/api'
import duplicateCity from '../middlewares/duplicateCity'

const enhancer = applyMiddleware(duplicateCity, api);

const store = createStore(reducer, {}, enhancer);

export default store
