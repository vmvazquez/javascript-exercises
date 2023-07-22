const Node = require('./node');
class Knight {
  /**
   *
   * @param {Array} position An integer array, Ex. [3,2]. from [0,0] to [7,7]
   */
  constructor(position, endPosition) {
    this.position = [position[0], position[1]];
    this.endPosition = endPosition;
    this.moveSet = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
    ];
  }

  setCurrentPosition(position) {
    this.position = position;
  }
  calcNextMoves() {
    let firstVal = this.position[0];
    let secondVal = this.position[1];

    let possibleMoves = [];
    this.moveSet.forEach((move) => {
      let newFirst = firstVal + move[0];
      let newSecond = secondVal + move[1];
      if (newFirst >= 0 && newFirst <= 7 && newSecond >= 0 && newSecond <= 7) {
        possibleMoves.push([newFirst, newSecond]);
      }
    });
    return possibleMoves;
  }
  findShortestPath() {
    let root = new Node(null, null, this.position);

    let temp = root;

    let queue = [temp];
    console.log('first loop:');
    let movesAlreadyTried = new Set();

    while (!locationsEqual(temp.location, this.endPosition)) {
      temp = queue.shift();

      this.setCurrentPosition(temp.location);

      let nextMoves = this.calcNextMoves();
      movesAlreadyTried.add(temp.location);
      nextMoves.forEach((move) => {
        if (!movesAlreadyTried.has(move)) {
          let node = new Node(temp, null, move);
          queue.push(node);
        }
      });
    }

    let arr = [];
    while (!locationsEqual(temp.location, root.location)) {
      arr.push(temp.location);
      temp = temp.prev;
    }

    arr.push(temp.location);
    return arr.reverse();
  }
}
const locationsEqual = (locationOne, locationTwo) => {
  return locationOne[0] == locationTwo[0] && locationOne[1] == locationTwo[1];
};
module.exports = Knight;
