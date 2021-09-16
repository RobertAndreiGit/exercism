type COLOR = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white'; 
const RESISTORS = new Map<COLOR, number>([['black', 0], ['brown', 1], ['red', 2], ['orange', 3], ['yellow', 4], ['green', 5], ['blue', 6], ['violet', 7], ['grey', 8], ['white', 9]]);

export function decodedValue(arr: Readonly<COLOR[]>): number {
  return Number(`${RESISTORS.get(arr[0])}${RESISTORS.get(arr[1])}`);
}
