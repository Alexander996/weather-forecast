import {ADD_CITY, DELETE_CITY, REFRESH_CITY, CHANGE_CITY_POSITION, WEATHER_URL, APPID} from '../consts'

export function addCity(cityName) {
    return {
        type: ADD_CITY,
        callAPI: `${WEATHER_URL}?q=${cityName}&appid=${APPID}&lang=ru&units=metric`,
        payload: {cityName}
    }
}

export function deleteCity(cityId) {
    return {
        type: DELETE_CITY,
        payload: {
            cityId
        }
    }
}

export function refreshCity(cityId) {
    return {
        type: REFRESH_CITY,
        callAPI: `${WEATHER_URL}?id=${cityId}&appid=${APPID}&lang=ru&units=metric`
    }
}

export function changeCityPosition(cityIdFrom, cityIdTo, before) {
    return {
        type: CHANGE_CITY_POSITION,
        payload: {
            cityIdFrom, cityIdTo, before
        }
    }
}
