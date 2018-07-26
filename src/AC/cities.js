import {ADD_CITY, URL, APPID} from '../consts'

export function addCity(cityName) {
    return {
        type: ADD_CITY,
        callAPI: `${URL}/weather?q=${cityName}&appid=${APPID}&lang=ru&units=metric`
    }
}
