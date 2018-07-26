import {OrderedMap} from 'immutable';

export function arrToMap(arr, DataRecord = OrderedMap) {
    return arr.reduce((acc, item) => acc.set(item.id, new DataRecord(item)), new OrderedMap({}));
}

export function mapToArr(obj) {
    return obj.valueSeq().toArray();
}

export function getTemperature(temp) {
    temp = Math.round(temp);
    const sign = temp > 0 ? '+' : '';
    return `${sign}${temp}\u2103`
}
