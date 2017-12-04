import { DRAW_DATA, SPACE, TARGET_ITEM, LINE_BREAK } from './constants';

class Render {
  constructor(model) {
    this._model = model;
    this._items = model.items;
    this._matrixSize = model.matrixSize;
  }

  _drawBorders(data) {
    let line = data.HL.repeat(data.lineWidth);  

    return {
      top: `${data.TL}${line}${data.TR}`,
      left: `${data.VL}${SPACE}`,
      right: `${SPACE}${data.VL}`,
      bottom: `${data.BL}${line}${data.BR}`
    };
  }

  _addSideBordersToItem(item, leftItemBorder, rightItemBorder) {
    let _item = item < 10 ? item + SPACE : item;

    return `${leftItemBorder}${_item}${rightItemBorder}`;
  }

  _drawItemsLines(items, deckBorderLeft, deckBorderRight, itemBorders, emptyItemBorders) {
    let targetRow = this._model.targetRow,
      targetColumn = this._model.targetColumn,
      batchSize = this._model.matrixSize;

    let topItemBorders = [itemBorders.top]._repeat(batchSize),
      bottomItemBorders = [itemBorders.bottom]._repeat(batchSize);

    let result = [], l = null, r = null, t = null, b = null;

    for (let i = 0, row = 0, end = items.length; i < end; i += batchSize) {

      if ( row == targetRow ) {
        t = topItemBorders._replace(targetColumn, emptyItemBorders.top);
        b = bottomItemBorders._replace(targetColumn, emptyItemBorders.bottom);
      } else {
        t = topItemBorders;
        b = bottomItemBorders;
      }

      row++;

      result = result.concat( 
        t, LINE_BREAK,
        items.slice(i, i + batchSize)
            .map(item => { 
              [l, r] = item === TARGET_ITEM ? [emptyItemBorders.left, emptyItemBorders.right] : [itemBorders.left, itemBorders.right];

              return this._addSideBordersToItem(item, l, r);
            }), LINE_BREAK, 
        b, LINE_BREAK
      );
    }

    return result;
  }

  _drawDeck(items, deckBorders, itemBorders, emptyItemBorders) {
    return [].concat(this._drawItemsLines(items, deckBorders.left, deckBorders.right, itemBorders, emptyItemBorders)).join('');
  }

  _drawItems(drawData) {
    let itemBorders = this._drawBorders(DRAW_DATA.ITEM),
      deckBorders = this._drawBorders(DRAW_DATA.DECK),
      emptyItemBorders = this._drawBorders(DRAW_DATA.ITEM_EMPTY);

    return this._drawDeck(this._model.items, deckBorders, itemBorders, emptyItemBorders);
  }

  render() {
    console.clear();
    console.log(this._drawItems(DRAW_DATA));
  }
}

export { Render }