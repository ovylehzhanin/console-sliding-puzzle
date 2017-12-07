import * as extenstions from './extensions';
import { GameModel } from './game-model';
import { DRAW_DATA } from './constants';
import { Render } from './render';
import { Controller } from './controller';

function main() {
  // Testing
  let gameModel = new GameModel(),
    render = new Render(),
    controller = new Controller(gameModel, render);

  controller.bindEvents();
}

window.addEventListener('DOMContentLoaded', main, false);