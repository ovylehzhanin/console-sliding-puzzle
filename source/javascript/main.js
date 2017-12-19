import * as extenstions from './extensions';
import GameModel from './game-model';
import { DRAW_DATA } from './constants';
import Render from './render';
import Controller from './controller';

function main() {
  let gameModel = new GameModel(),
    render = new Render(DRAW_DATA),
    controller = new Controller(gameModel, render);

  controller.init();
}

window.addEventListener('DOMContentLoaded', main, false);
