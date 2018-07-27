import {ADD_CITY, FAIL} from '../consts';
import {mapToArr} from '../utils';

export default store => next => action => {
    const {callAPI, type} = action;
    if (!callAPI || type !== ADD_CITY) return next(action);

    const {cityName} = action.payload;
    const state = store.getState();
    const cities = mapToArr(state.cities.cities);

    for (const city of cities) {
        if (cityName.toLowerCase() === city.name.toLowerCase()) {
            delete action.callAPI;
            action = {
                type: type + FAIL,
                error: new Error('Вы уже добавили этот город')
            };
            break;
        }
    }

    next(action);
}
