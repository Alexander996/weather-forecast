import axios from 'axios';

import {START, SUCCESS, FAIL} from '../consts';

export default store => next => action => {
    const {callAPI, type} = action;
    if (!callAPI) return next(action);

    next({
        type: type + START
    });

    axios.get(callAPI)
        .then(response => next({type: type + SUCCESS, response: response.data}))
        .catch(error => next({type: type + FAIL, error: handleError(error)}));
}

function handleError(error) {
    const status = error.message.slice(-3);
    switch (+status) {
        case 404:
            return new Error('Город не найден');

        default:
            return new Error('Неизвестная ошибка')
    }
}
