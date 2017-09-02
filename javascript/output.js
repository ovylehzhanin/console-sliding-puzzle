var barleyBreak = barleyBreak || {};

(function(game) {

  game.output = function(index) {
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

    let matrixSize = game.matrixSize();

    let getBorders = function(drawData) {
      let line = drawData.HL.repeat(drawData.lineWidth);

      return {
        top: `${drawData.TLC}${line}${drawData.TRC}`,
        left: `${drawData.VL}${_SPACE}`,
        right: `${_SPACE}${drawData.VL}`,
        bottom: `${drawData.BLC}${line}${drawData.BRC}`
      };
    };

    let drawItem = function(itemBorders, item) {
      return `${itemBorders.left}${item < 10 ? item + _SPACE : item}${itemBorders.right}`;
    };

    let arrayReplaceAt = function(array, indexToReplace, valueToInsert) {
      let arrayCopy = array.map(item => item);
      arrayCopy.splice(indexToReplace, 1, valueToInsert);

      return arrayCopy;
    };

    let drawDeck = function() {
      let itemBorders = getBorders(_IB),
        emptyItemBorders = getBorders(_EIB),
        deckBorders = getBorders(_DB),

        items = game.appData.items,
        
        emptyItemRow = Math.floor(index / matrixSize),
        itemsRowTop = Array(matrixSize).fill(itemBorders.top),
        itemsRowBottom = Array(matrixSize).fill(itemBorders.bottom),
        
        deckRowTop = '',
        deckRowBottom = '',
        
        output = [],
        realOutput = []; // :DDD

      output = items.map(function(item) {
        let empty = item === _SPACE;

        return drawItem(empty ? emptyItemBorders : itemBorders, item);
      });

      console.log(output.join(''));

      for (let i = 0, end = output.length; i < end; i += matrixSize) {

        let data = [itemsRowTop, output.slice(i, i + matrixSize), itemsRowBottom];

        if (i === emptyItemRow) {
          data[0] = arrayReplaceAt(data[0], index - i, emptyItemBorders.top);;
          data[2] = arrayReplaceAt(data[2], index - i, emptyItemBorders.bottom);;
        }

        console.log(data);

        // realOutput.push(data.map(item => item.join('')));
        realOutput.push( data.map(item => item.join('')) );
      }

      return realOutput;
    };

    console.clear();
    console.log( drawDeck() );
  };

})(window.barleyBreak);