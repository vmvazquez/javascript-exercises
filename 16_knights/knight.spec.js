const Knight = require('./knight');

test('Testing calcNextMoves', () => {
  let knight = new Knight([3, 3]);
  let actualMoves = [
    [4, 5],
    [5, 4],
    [5, 2],
    [4, 1],
    [2, 1],
    [1, 2],
    [1, 4],
    [2, 5],
  ];
  expect(knight.calcNextMoves()).toEqual(actualMoves);
});

test('Testing calcNextMoves right out of bounds', () => {
  let knight = new Knight([7, 3]);
  let actualMoves = [
    [6, 1],
    [5, 2],
    [5, 4],
    [6, 5],
  ];
  expect(knight.calcNextMoves()).toEqual(actualMoves);
});
test('Find Shortest Path', () => {
  let knight = new Knight([3, 3], [0, 0]);
  let actualMoves = [
    [3, 3],
    [2, 1],
    [0, 0],
  ];
  expect(knight.findShortestPath()).toEqual(actualMoves);
});
