import { TARGET_ITEM, DEFAULTS } from './constants'

class GameModel {
  constructor() {
    this.items = DEFAULTS.ITEMS;
    this.matrixSize = DEFAULTS.MATRIX_SIZE;
    this.targetItemPosition = [3, 3];
    this._possibleMoves = { left: [], top: [], right: [], down: [] };
  }

  getItems() {
    return this.items;
  }

  _findPossibleMoves() {
    let row = this.targetItemPosition[0],
      column = this.targetItemPosition[1];

    this._possibleMoves.left = [row, column - 1];
    this._possibleMoves.top = [row - 1, column];
    this._possibleMoves.right = [row, column + 1];
    this._possibleMoves.down = [row + 1, column];
  }

  _checkCompletion() {
    let oneDimensional = [],
      complete = false;

    this.getItems()
      .forEach(row => oneDimensional = oneDimensional.concat(row));

    for (let i = 0, end = oneDimensional.length; i < end - 2; i += 1) {
      complete = oneDimensional[i + 1] - oneDimensional[i] === 1;

      if (!complete) break;
    }

    console.log(complete);
  }

  replaceItems(direction) {
    let positionIndex = this._possibleMoves[direction],
      positionRow = positionIndex[0],
      positionColumn = positionIndex[1],
      item = this.items[positionRow] ? this.items[positionRow][positionColumn] : undefined;

    if (item) {
      this.targetItemPosition = this.items._swap(this.targetItemPosition, positionIndex);
    }

    this._findPossibleMoves();
  }
}

export { GameModel }