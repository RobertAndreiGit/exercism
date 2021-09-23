const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const;
type COLOR = typeof COLORS;

export function decodedValue(arr: Readonly<COLOR>): number {
  return COLORS.indexOf(arr[0])*10 + COLORS.indexOf(arr[1]);
}