var barleyBreak = barleyBreak || {};

(function(game) {

  game.output = function() {
  // https://en.wikipedia.org/wiki/Box-drawing_character
  // ╗,╔,╝,╚,═,║
  // ┓,┏,┛,┗,━,┃

  // Deck borders - DB
  // Item borders - IB
  // Empty item borders - EIB
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
    _DB = {
      lineWidth: 16,
      TLC: '╔',
      TRC: '╗',
      BLC: '╚',
      BRC: '╝',
      VL: '║',
      HL: '═'
    },
    _IB = {
      lineWidth: 4,
      TLC: '┏',
      TRC: '┓',
      BLC: '┗',
      BRC: '┛',
      VL: '┃',
      HL: '━'
    },
    _EIB = {
      lineWidth: 4,
      TLC: _SPACE,
      TRC: _SPACE,
      BLC: _SPACE,
      BRC: _SPACE,
      VL: _SPACE,
      HL: _SPACE
    };

  let columns = game.matrixSize();

  let drawItem = function(drawData, item) {
    let line = drawData.HL.repeat(drawData.lineWidth);

    return {
      top: `${drawData.TLC}${line}${drawData.TRC}`,
      middle: `${drawData.VL}${_SPACE}${item < 10 ? item + _SPACE : item}${_SPACE}${drawData.VL}`,
      bottom: `${drawData.BLC}${line}${drawData.BRC}`
    }
  };

  let _getDeck = function() {
    let array = game.appData.items,
      i = 0,
      end = array.length,
      topRow = '',
      middleRow = '',
      bottomRow = '',
      output = [],
      temp;

    for (i; i < end; i++) {
      temp = drawItem(array[i] === _SPACE ? _EIB : _IB, array[i]);

      topRow += temp.top;
      middleRow += temp.middle;
      bottomRow += temp.bottom;

      if ( !((i + 1) % columns) ) {
        output.push(`${topRow}\n${middleRow}\n${bottomRow}`);

        topRow = middleRow = bottomRow = '';
      }
    }
    
    return output.join('\n');
  };

  console.clear();
  console.log(_getDeck());

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