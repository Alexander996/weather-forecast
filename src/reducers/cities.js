import {Record, OrderedMap} from 'immutable';

import {ADD_CITY, START, SUCCESS} from '../consts';

const CityRecord = Record({
    id: undefined,
    name: undefined,
    weather: undefined,
    main: undefined
});

const ReducerState = Record({
    isLoading: false,
    cities: OrderedMap({})
});

const defaultState = new ReducerState();

export default (citiesState = defaultState, action) => {
    const {type, response} = action;

    switch (type) {
        case ADD_CITY + START:
            return citiesState.set('isLoading', true);

        case ADD_CITY + SUCCESS:
            return citiesState.setIn(['cities', response.id], new CityRecord(response))
                .set('isLoading', false);

        default:
            return citiesState
    }
}
