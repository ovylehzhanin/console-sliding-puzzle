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

    if (keyCode >= 37 && keyCode < 40) {
      if (keyCode === 37) direction = 'LEFT';
      if (keyCode === 38) direction = 'UP';
      if (keyCode === 39) direction = 'RIGHT';
      if (keyCode === 40) direction = 'DOWN';
      gameModel.replaceItems(direction);
      render.render();
    }

  }, false);
}

window.addEventListener('DOMContentLoaded', main, false);