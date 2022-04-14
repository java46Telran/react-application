export default class Operations {
    sum(n1: number, n2: number): number {
        return n1 + n2;
    }
    divide(n1: number, n2: number): number {
        if (n2 == 0) {
            throw Error("zero division")
        }
        return n1 / n2;
    }
    checkPredicate(pred: (n1: number, n2: number)=>boolean, n1: number, n2: number): boolean {
        return pred(n1, n2);
    }
    convert(ar: number[], converter: (n: number)=>number): number[] {
        return ar.map(converter);
    }
    concat(str1: string, str2: string): string {
        return str1 + str2;
    }
    getObject(field: number):{field: number} {
        return {field:field};
    }
}