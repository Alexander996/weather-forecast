import {START, SUCCESS, FAIL} from '../consts';

export default store => next => action => {
    const {callAPI, type} = action;
    if (!callAPI) return next(action);

    next({
        type: type + START
    });

    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({type: type + SUCCESS, response}))
        .catch(error => next({type: type + FAIL, error}));
}
