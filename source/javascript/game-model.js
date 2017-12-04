import { TARGET_ITEM, ITEMS } from './constants'

class GameModel {
  constructor() {
    this.items = ITEMS;
    this.matrixSize = 4;
    this._targetIntex = null;
    this.TARGET_ITEM = TARGET_ITEM;
    this.possibleMoves = { up: null, left: null, right: null, down: null };
  }

  _findTarget() {
    this._targetIndex = this.items.indexOf(this.TARGET_ITEM);
  }

  _findPossibleMoves() {
    this._findTarget();

    let ti = this._targetIndex,
      ms = this.matrixSize,
      il = this.items.length;

    this.possibleMoves.up = ti < ms ? null : ti - ms;
    this.possibleMoves.left = ( ti === 0 || !(ti % ms) ) ? null : ti - 1;
    this.possibleMoves.right = ( ti === (il - 1) || !((ti + 1) % ms ) ) ? null : ti + 1;
    this.possibleMoves.down = ti >= il - ms ? null : ti + ms;
  }

  replaceItems(direction) {
    if (this.possibleMoves[direction] != null) {
      this.items._swap(this._targetIndex, this.possibleMoves[direction]);
    }

    this._findPossibleMoves();
  }
}

export { GameModel }