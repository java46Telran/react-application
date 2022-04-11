import { getRandomMatrix } from "../util/random";

export default class LifeMatrix {
    constructor(private _numbers: number[][]) {

    }
    get numbers() {
        return this._numbers
    }
    nextStep(): number[][] {
        //TODO write an implementation of the life game algorithm
        //reminder: firstly create copy for updating cells based on the previous matrix
        this._numbers = getRandomMatrix(this._numbers.length, this._numbers.length, 0, 1);
        return this._numbers;
    }
}