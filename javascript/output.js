var barleyBreak = barleyBreak || {};

(function(game) {

  game.output = function() {
  // https://en.wikipedia.org/wiki/Box-drawing_character

  // ╗,╔,╝,╚,═,║
  // ┓,┏,┛,┗,━,┃

  // Bold borders - BB
  // Light borders - LB
  // Empty borders - EB
  // Top-left corner - tlc
  // Top-right corner - trc
  // Bottom-left corner - blc
  // Bottom-right corner - brc
  // Vertical line - vl
  // Horizontal line - hl

  // Drawing chars:
  const _NEXT_LINE = '\n',
    _SPACE = ' ',
    _EMPTY_STRING = '';
    _BB = {
      TLC: '╔',
      TRC: '╗',
      BLC: '╚',
      BRC: '╝',
      VL: '║',
      HL: '═'
    },
    _LB = {
      TLC: '┏',
      TRC: '┓',
      BLC: '┗',
      BRC: '┛',
      VL: '┃',
      HL: '━'
    },
    _EB = {
      TLC: _SPACE,
      TRC: _SPACE,
      BLC: _SPACE,
      BRC: _SPACE,
      VL: _SPACE,
      HL: _SPACE
    };

  // let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
  let testArray = [1, 2, 3, 4];

  let _getBorders = function(chars, lineWidth) {
    let line = chars.HL.repeat(lineWidth);
    // return [`${chars.TLC}${line}${chars.TRC}`, `${chars.BLC}${line}${chars.BRC}`];
    return {
      top: `${chars.TLC}${line}${chars.TRC}`,
      bottom: `${chars.BLC}${line}${chars.BRC}`,
      left: `${chars.VL}${_SPACE}`,
      right: `${_SPACE}${chars.VL}`
    };
  };

  let _getItemsRow = function(item, left, right) {
    return left += (item < 10 ? item + _SPACE : item) + right;
  };

  // console.log(getBorders(LB, 4).repeat(4));
  // console.log(
  //     JSON.stringify( _getBorders(_LB, 4) )
  //   );

  let getInnerDeck = function() {
    
  };

  let test = function() {
    let itemBorders = _getBorders(_LB, 4),
      topRow = itemBorders.top.repeat(4),
      bottomRow = itemBorders.bottom.repeat(4),
      itemsRow = testArray
          .map(item => _getItemsRow(item, itemBorders.left, itemBorders.right))
          .join('');

    console.clear();
    console.log(`${topRow}\n${itemsRow}\n${bottomRow}`);
  };

  test();

  // var matrixSize = this.matrixSize(),
  //   items = this.appData.items,
  //   isComplete = this.appData.isComplete,
  //   congrats = '',
  //   steps = 'Steps:\t' + this.appData.stepsCounter;

  // for (var i = 0, separator = ''; i < matrixSize; i++) {
  //   separator += '--------';
  // }

  // separator += '-\n';

  // if (isComplete) congrats = 'C-O-N-G-R-A-T-U-L-A-T-I-O-N-S!!!!!1';

  // console.clear();
  // console.log(
  //   separator +

  //   items.map(function(element) {
  //     var lineBreak = false;

  //     if ( !((items.indexOf(element) + 1) % matrixSize) ) {
  //       lineBreak = true;
  //     }               

  //     element = '|\t' + element + '\t|';

  //     return lineBreak ?
  //       element + '\n' + separator :
  //       element;
  //   })

  //   .reduce(function(emptyString, element) {
  //     return emptyString + element;
  //   }, '') +
  //   '\n' + steps +
  //   '\n' + congrats
  // );

  // return this;
  }

})(window.barleyBreak);