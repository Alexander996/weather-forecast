import {Record, OrderedMap} from 'immutable';

import {ADD_CITY, DELETE_CITY, REFRESH_CITY, START, SUCCESS, FAIL} from '../consts';

const CityRecord = Record({
    id: undefined,
    name: undefined,
    weather: undefined,
    main: undefined
});

const ReducerState = Record({
    isLoading: false,
    error: null,
    cities: OrderedMap({})
});

const defaultState = new ReducerState();

export default (citiesState = defaultState, action) => {
    const {type, response, error, payload} = action;

    switch (type) {
        case ADD_CITY + START:
        case REFRESH_CITY + START:
            return citiesState.set('isLoading', true)
                .set('error', null);

        case ADD_CITY + SUCCESS:
        case REFRESH_CITY + SUCCESS:
            return citiesState.setIn(['cities', response.id], new CityRecord(response))
                .set('isLoading', false);

        case ADD_CITY + FAIL:
        case REFRESH_CITY + FAIL:
            return citiesState.set('isLoading', false)
                .set('error', error);

        case DELETE_CITY:
            return citiesState.deleteIn(['cities', payload.cityId]);

        default:
            return citiesState
    }
}
