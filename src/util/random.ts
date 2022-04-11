export function getRandomNumber(min: number, max: number): number {
    if (min > max) {
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max - min));
}
export function getRandomMatrix(columns: number, rows: number, min: number, max: number): number[][] {
    const res: number[][] = new Array<number[]>();
    for(let i = 0; i < rows; i++) {
        res[i] = [];
        for(let j = 0; j < columns; j++) {
            res[i][j] = getRandomNumber(min, max);
        }
    }
    return res;
}