import { GameModel } from './game-model';
import { U } from './constants';

function main() {
  let gameModel = new GameModel(4);

  console.log(gameModel.fillItemsArray());
  console.log(U['2550'], U['2551']);
}

window.addEventListener('DOMContentLoaded', main, false);
/*
var barleyBreak = barleyBreak || {};

(function(game) {
  
  document.getElementById('generate').addEventListener('click', function() {
    
    var deckSize = Number(document.getElementById('deckSize').value),
      matrixSize = game.matrixSize();

    if (!matrixSize || matrixSize !== deckSize) {
      game.matrixSize(deckSize)
        .fill();
    }

    game.shuffle()
      .output();

  }, false);

  window.addEventListener('keydown', function(event) {
    
    var deckReady = game.matrixSize(),
      isComplete = game.appData.isComplete;
    
    if (!isComplete && deckReady && event.keyCode > 36 && event.keyCode < 41) {
      game.makeMove(event.keyCode)
        .incrementSteps()
        .checkCompletion()
        .output();
    }

  }, false);

})(window.barleyBreak);
*/
