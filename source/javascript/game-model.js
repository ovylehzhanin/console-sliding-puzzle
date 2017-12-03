import { TARGET_ITEM, ITEMS } from './constants'

class GameModel {
  constructor() {
    this.items = ITEMS;
    this.currentIndex = 0;
    this.matrixSize = 4;
    this.TARGET_ITEM = TARGET_ITEM;
  }

  _findTarget() {
    return this.items.indexOf(this.TARGET_ITEM);
  }

  replaceItems(direction) {
    let currentIndex = this._findTarget();

    if (direction === 'LEFT') {
      this.items._swap(currentIndex, currentIndex - 1);
    }

    if (direction === 'RIGHT') {
      this.items._swap(currentIndex, currentIndex + 1);
    }

  }
}

export { GameModel }