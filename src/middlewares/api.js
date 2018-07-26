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
        .catch(error => next({type: type + FAIL, error}));
}
