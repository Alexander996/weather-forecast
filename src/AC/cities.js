import {ADD_CITY, WEATHER_URL, APPID} from '../consts'

export function addCity(cityName) {
    return {
        type: ADD_CITY,
        callAPI: `${WEATHER_URL}?q=${cityName}&appid=${APPID}&lang=ru&units=metric`
    }
}
