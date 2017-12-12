import { DRAW_DATA, KEYS } from './constants';

class Controller {
  constructor(model, render) {
    this._model = model;
    this._render = render;
  }

  _cacheDOM() {
    return {
      matrixSizeInput: document.getElementById('matrixSize'),
      startButton: document.getElementById('start')
    };
  }

  _getDirectionFromKeyCode(keyCode, keys) {
    switch(keyCode) {
      case keys.LEFT:
        return 'right';

      case keys.UP:
        return 'down';

      case keys.RIGHT:
        return 'left';

      case keys.DOWN:
        return 'top';

      defalut:
        break;
    }
  }

  _moveItems(event) {
    let keyCode = event.keyCode,
      direction = '';

    if (keyCode >= KEYS.LEFT && keyCode <= KEYS.DOWN) {
      direction = this._getDirectionFromKeyCode(keyCode, KEYS);
      this._model.replaceItems(direction);
      this._render.render(this._model.getItems(), this._model.targetItemPosition);
      this._model._checkCompletion();
    }
  }

  _shuffleItems() {
    let iterations = 1000,
      simulatedKeyCode = null,
      simulatedDirection = '';

    for (let i = 0; i < iterations; i += 1) {
      simulatedKeyCode = Math.floor((Math.random() * 4) + 37);
      simulatedDirection = this._getDirectionFromKeyCode(simulatedKeyCode, KEYS);
      this._model.replaceItems(simulatedDirection);
    }
  }

  _bindEvents() {
    window.addEventListener('keydown', this._moveItems.bind(this), false);
  }

  init() {
    this._shuffleItems();
    this._model._findPossibleMoves();
    this._render.init(DRAW_DATA, this._model.matrixSize);
    this._render.render(this._model.getItems(), this._model.targetItemPosition);
    this._bindEvents();
  }
}

export { Controller }