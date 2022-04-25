export function getRandomNumber(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max -min));

}
export function getRandomElement(array) {
    const index = getRandomNumber(0, array.length - 1);
    return array[index];
}
export function getRandomDate(minYear, maxYear) {
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 11);
    const day = getRandomNumber(1, 31);
    const date = new Date(year, month, day) ;
    return date;
}