export const testCases: [number[], number | null][] = [
  [[], null],
  [[0], 1],
  [[1], 2],
  [[14], 15],
  [[0, 1, 3, 4, 5], 2],
  [[4, 3, -1, 2, 1], null],
  [[1, 4, 3, 5, 8, 6, 9], 2],
  [[23, 29, 28, 27, 32, 26, 31, 25, 24], 30],
];