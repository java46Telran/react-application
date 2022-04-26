export function range (minInclusive: number, maxExclusive: number): number[] {
 const res: number[] = [];
 for (let i = minInclusive; i < maxExclusive; i++) {
     res.push(i);
 }
 return res;
}
export function getMinMaxAvgByField(array: any[], field: string): {min: number, max: number, avg: number} {
    if (!array || array.length == 0 || !array[0][field] || typeof (array[0][field]) != 'number') {
        return {min: 0, max:0, avg:0};
    }
   const resObj: {min: number, max: number, avg: number} =  array.reduce((res, cur) => ({min: res.min > cur[field] ? cur[field] : res.min,
max: res.max < cur[field] ? cur[field] : res.max, avg: res.avg + cur[field]}), {min: array[0][field],
     max: array[0][field], avg: 0});
   resObj.avg = Math.round(resObj.avg / array.length) ;
   return resObj; 

}