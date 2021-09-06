export default class Squares{
    difference: Readonly<number>;
    squareOfSum: Readonly<number>;
    sumOfSquares: Readonly<number>;

    constructor(count: Readonly<number>){
        this.sumOfSquares = (count *(count+1)*(2*count+1))/6;
        this.squareOfSum = Math.pow((count * (count + 1)) / 2, 2); 
        this.difference = this.squareOfSum - this.sumOfSquares;
    }
}