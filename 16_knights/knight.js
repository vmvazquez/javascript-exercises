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
    while (temp.location != this.endPosition) {
      let temp = queue.shift();
      console.log(temp);
      movesAlreadyTried.add(temp.location);
      this.setCurrentPosition(temp.location);

      let nextMoves = this.calcNextMoves();

      nextMoves.forEach((move) => {
        if (!movesAlreadyTried.has(move)) {
          let node = new Node(temp, null, move);
          queue.push(node);
        }
      });
    }

    console.log('Left first loop');
    let endNode = temp;
    let arr = [];
    while (temp.location != root.location) {
      arr.push(temp);
      temp = temp.prev;
    }

    return arr.reverse();
  }
}

module.exports = Knight;
