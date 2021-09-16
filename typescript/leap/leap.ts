export function isLeap(year: Readonly<number>): boolean {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
