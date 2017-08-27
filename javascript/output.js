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

  let _getBorders = function(drawData) {
    let line = drawData.HL.repeat(drawData.lineWidth);

    return {
      top: `${drawData.TLC}${line}${drawData.TRC}`,
      bottom: `${drawData.BLC}${line}${drawData.BRC}`,
      left: `${drawData.VL}${_SPACE}`, 
      right: `${_SPACE}${drawData.VL}`
    };
  };

  let _getDeck = function() {
    let array = game.appData.items,
      borders = _getBorders(_IB),
      i = 0,
      end = array.length,
      tempString = '',
      outputArray = [];

    for (i; i < end; i++) {
      tempString += `${borders.left}${array[i] < 10 ? array[i] + _SPACE : array[i]}${borders.right}`;

      if ((i + 1) % columns === 0) {
        outputArray.push(tempString);
        tempString = '';
      }
    }

    return outputArray.map(item => `${borders.top.repeat(columns)}\n${item}\n${borders.bottom.repeat(columns)}\n`).join('');
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