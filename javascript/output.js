var barleyBreak = barleyBreak || {};

(function(game) {
  
  game.output = function() {
    // https://en.wikipedia.org/wiki/Box-drawing_character
    // 

    // ╗,╔,╝,╚,═,║
    // ┓,┏,┛,┗,━,┃

    // Bold borders - bb
    // Light borders - lb
    // Top-left corner - tlc
    // Top-right corner - trc
    // Bottom-left corner - blc
    // Bottom-right corner - brc
    // Vertical line - vl
    // Horizontal line - hl
    const bb = {
        tlc: 9556,
        trc: 9559,
        blc: 9562,
        brc: 9565,
        vl: 9553,
        hl: 9552
      },
      lb = {
        tlc: 9487,
        trc: 9491,
        blc: 9495,
        brc: 9499,
        vl: 9475,
        hl: 9473
      }


    var matrixSize = this.matrixSize(),
      items = this.appData.items,
      isComplete = this.appData.isComplete,
      congrats = '',
      steps = 'Steps:\t' + this.appData.stepsCounter;
    
    for (var i = 0, separator = ''; i < matrixSize; i++) {
      separator += '--------';
    }

    separator += '-\n';

    if (isComplete) congrats = 'C-O-N-G-R-A-T-U-L-A-T-I-O-N-S!!!!!1';

    console.clear();
    console.log(
      separator +
      
      items.map(function(element) {
        var lineBreak = false;

        if ( !((items.indexOf(element) + 1) % matrixSize) ) {
          lineBreak = true;
        }               

        element = '|\t' + element + '\t|';

        return lineBreak ?
          element + '\n' + separator :
          element;
      })
      
      .reduce(function(emptyString, element) {
        return emptyString + element;
      }, '') +
      '\n' + steps +
      '\n' + congrats
    );

    return this;
  }

})(window.barleyBreak);