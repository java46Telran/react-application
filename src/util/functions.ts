import { RouteType } from "../models/RouteType";
import _ from 'lodash'
import Distribution from "../models/Distribution";

export function range(minInclusive: number, maxExclusive: number): number[] {
    const res: number[] = [];
    for (let i = minInclusive; i < maxExclusive; i++) {
        res.push(i);
    }
    return res;
}
export function getMinMaxAvgByField(array: any[], field: string): { min: number, max: number, avg: number } {
    if (!array || array.length === 0 || !array[0][field] || typeof (array[0][field]) !== 'number') {
        return { min: 0, max: 0, avg: 0 };
    }
    const resObj: { min: number, max: number, avg: number } = array.reduce((res, cur) => ({
        min: res.min > cur[field] ? cur[field] : res.min,
        max: res.max < cur[field] ? cur[field] : res.max, avg: res.avg + cur[field]
    }), {
        min: array[0][field],
        max: array[0][field], avg: 0
    });
    resObj.avg = Math.round(resObj.avg / array.length);
    return resObj;

}
export function getRouteIndex(items: RouteType[], pathname: string): number {
    let index = items.findIndex(item => item.path === pathname);
    if (index < 0) {
        index = 0;
    }
    return index;
}
export function getStatistics(field: string, interval: number, array: any[]): Distribution {
    if (array.length === 0) {
        throw "empty array "
    }
    if (typeof array[0][field] !== 'number') {
        throw `field ${field} doesn't exist or no number`
    }
    const statisticsObj = _.countBy(array, obj => Math.floor(obj[field] / interval));
    return Object.entries(statisticsObj).map(e => {
        const intervalNumber: number = +e[0];
        const min: number = intervalNumber * interval;
        const max: number = min + interval - 1;
        return { min, max, amount: +e[1] }
    })
}