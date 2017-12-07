import { KEY_CODES } from './constants';

class Controller {
  constructor(model, render) {
    this._model = model;
    this._render = render;
  }

  makeMove(event) {
    let keyCode = event.keyCode,
      direction = '',
      [LEFT, UP, RIGHT, DOWN] = [KEY_CODES.LEFT_ARROW, KEY_CODES.UP_ARROW, KEY_CODES.RIGHT_ARROW, KEY_CODES.DOWN_ARROW];

    if (keyCode >= LEFT && keyCode <= DOWN) {
      switch (keyCode) {
        case LEFT:
          direction = 'right';
          break;

        case UP:
          direction = 'down';
          break;

        case RIGHT:
          direction = 'left';
          break;

        case DOWN:
          direction = 'up';
          break;

        default:
          break;
      }

      console.log(direction);
      // this_model.replaceItems(direction);
    }
  }

  setMatrixSize() {
    let matrixSizeInput = document.getElementById('matrixSize'),
      inputValue = Number(matrixSizeInput.value);
      
    this._model.setMatrixSize(inputValue);
  }  

  bindEvents() {
    let startButton = document.getElementById('start');

    window.addEventListener('keydown', this.makeMove, false);
    startButton.addEventListener('click', this.setMatrixSize.bind(this), false);
  }
}

export { Controller }