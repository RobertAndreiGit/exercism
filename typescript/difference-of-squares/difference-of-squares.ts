export default class Squares{
    squareOfSum: number;
    sumOfSquares: number;
    difference: number;

    constructor(count: number){
        this.sumOfSquares = 0;
        for(let i = 1; i <= count; i++){
            this.sumOfSquares += Math.pow(i, 2);
        }

        this.squareOfSum = Math.pow((count * (count + 1)) / 2, 2); 
        this.difference = this.squareOfSum - this.sumOfSquares;
    }
}