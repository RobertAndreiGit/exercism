type COLOR = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'grey' | 'white';
const COLORS: COLOR[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedValue(arr: Readonly<COLOR[]>): number {
  return COLORS.indexOf(arr[0])*10 + COLORS.indexOf(arr[1]);
}