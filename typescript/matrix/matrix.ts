type MatrixType = number[][];

export class Matrix {
  private rows: MatrixType;
  private columns: MatrixType;

  constructor(input: Readonly<string>) {
   this.rows = input
     .split("\n")
     .map(row => row.split(" ").map(value => Number(value)));
    
   this.columns = this.rows[0].map((_, colIndex) =>
     this.rows.map((row) => row[colIndex]))
  }
}
