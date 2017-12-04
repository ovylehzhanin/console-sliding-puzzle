import * as extenstions from './extensions';
import { GameModel } from './game-model';
import { DRAW_DATA } from './constants';
import { Render } from './render';

function main() {
  // Testing
  let gameModel = new GameModel(),
    render = new Render(gameModel);

  render.render();

  document.addEventListener('keydown', function (event) {
    let keyCode = event.keyCode,
      direction = '';

    if (keyCode >= 37 && keyCode <= 40) {
      switch (keyCode) {
        case 37:
          direction = 'right';
          break;

        case 38:
          direction = 'down';
          break;

        case 39:
          direction = 'left';
          break;

        case 40:
          direction = 'up';
          break;

        default:
          break;
      }

      gameModel.replaceItems(direction);
      render.render();
    }

  }, false);
}

window.addEventListener('DOMContentLoaded', main, false);