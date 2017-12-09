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

  _moveItems(event) {
    let keyCode = event.keyCode,
      direction = '';

    if (keyCode >= KEYS.LEFT && keyCode <= KEYS.DOWN) {
      switch(keyCode) {
        case KEYS.LEFT:
          direction = 'right';
          break;

        case KEYS.UP:
          direction = 'down';
          break;

        case KEYS.RIGHT:
          direction = 'left';
          break;

        case KEYS.DOWN:
          direction = 'top';
          break;

        default:
          break;
      }

      this._model.replaceItems(direction);
      this._render.render(this._model.getItems(), this._model.targetItemPosition);
    }
  }

  _bindEvents() {
    window.addEventListener('keydown', this._moveItems.bind(this), false);
  }

  init() {
    this._model._findPossibleMoves();
    this._render.init(DRAW_DATA, this._model.matrixSize);
    this._bindEvents();
  }
}

export { Controller }