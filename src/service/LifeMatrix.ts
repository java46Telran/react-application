function fromAlive(nLives: number): number {
    return +(nLives === 2 || nLives === 3);//to 1 only if the condition true
}
function fromDead(nLives: number): number {
    return +(nLives === 3);//to 1 only if the condition true
}
export default class LifeMatrix {
    constructor(private _numbers: number[][]) {
    }
    get numbers() {
        return this._numbers
    }
    nextStep(): number[][] {
        const numbersCopy: number[][]= new Array<number[]>();
        for (let i = 0; i < this.numbers.length; i++) {
            numbersCopy[i] = [];
            for (let j = 0; j < this._numbers[i].length; j++) {
                numbersCopy[i][j] = this.getNumber(i, j);
            }
        }
        this._numbers = numbersCopy;
        return this._numbers;
    }
    private getNumber(i: number, j: number): number {
        const neighbours: (number|undefined)[] =
            [...this.rowNeighbours(i-1,j),...this.rowNeighbours(i+1,j),
                this._numbers[i][j-1], this._numbers[i][j+1]];
        const nLives = neighbours.reduce((res: number, cur) => {
            return cur ? res + 1 : res;
        }, 0)

        return this._numbers[i][j] ? fromAlive(nLives) : fromDead(nLives);
    }
    private rowNeighbours(i: number, j: number):(number|undefined)[] {
       return this.numbers[i]===undefined ? [undefined] : [this.numbers[i][j],
           this.numbers[i][j-1], this.numbers[i][j+1] ];
    }

}