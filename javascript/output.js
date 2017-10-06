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
        lineWidth: 26,
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

        index = items.indexOf(_SPACE),
        
        emptyItemRow = Math.floor(index / matrixSize),
        itemsRowTop = Array(matrixSize).fill(itemBorders.top),
        itemsRowBottom = Array(matrixSize).fill(itemBorders.bottom),
        
        deckRowTop = deckBorders.top,
        deckRowBottom = deckBorders.bottom,
        
        renderedItems = [],
        realOutput = []; // :DDD

      renderedItems = items.map(function(item) {
        let empty = item === _SPACE;

        return drawItem(empty ? emptyItemBorders : itemBorders, item);
      });

      // console.log([index, emptyItemRow, index - emptyItemRow * matrixSize, deckRowTop, deckRowBottom]);

      for (let i = 0; i < matrixSize; i++) {
        let data = [
          itemsRowTop,
          renderedItems.slice(i * matrixSize, i * matrixSize + matrixSize),
          itemsRowBottom
        ];

        if (i === emptyItemRow) {
          data[0] = data[0].replaceItemAt(index - i * matrixSize, emptyItemBorders.top);
          data[2] = data[2].replaceItemAt(index - i * matrixSize, emptyItemBorders.bottom);
        }

        data.map(item => realOutput.push(item.join('')));
      }

      return `${deckRowTop}\n${realOutput.map(item => `${deckBorders.left}${item}${deckBorders.right}`).join('\n')}\n${deckRowBottom}`;
    };

    console.clear();
    console.log( drawDeck() );
  };

})(window.barleyBreak);
