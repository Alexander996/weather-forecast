import {Record, OrderedMap} from 'immutable';

import {ADD_CITY, DELETE_CITY, REFRESH_CITY, CHANGE_CITY_POSITION, START, SUCCESS, FAIL} from '../consts';

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
                .set('error', error.message);

        case DELETE_CITY:
            return citiesState.deleteIn(['cities', payload.cityId]);

        case CHANGE_CITY_POSITION:
            const {cityIdFrom, cityIdTo, before} = payload;
            const city = citiesState.getIn(['cities', cityIdFrom]);
            const cities = citiesState.get('cities');

            let updatedCities;
            if (before) {
                updatedCities = insertBefore(cities, cityIdTo, city);
            }
            else {
                updatedCities = insertAfter(cities, cityIdTo, city);
            }
            return citiesState.set('cities', updatedCities);

        default:
            return citiesState
    }
}

function insertBefore(map, index, city) {
    return OrderedMap().withMutations(r => {
        for (let [k, v] of map.entries()) {
            if (k === city.id) continue;
            if (index === k) {
                r.set(city.id, city);
            }
            r.set(k, v)
        }
    })
}

function insertAfter(map, index, city) {
    return OrderedMap().withMutations(r => {
        for (let [k, v] of map.entries()) {
            if (k === city.id) continue;
            r.set(k, v);

            if (index === k) {
                r.set(city.id, city);
            }
        }
    })
}
