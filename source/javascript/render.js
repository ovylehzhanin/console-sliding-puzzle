import { _sfcc, _arrayRepeat } from './extensions';
import { DRAW_DATA, SPACE, TAGET_ITEM, LINE_BREAK } from './constants';

class Render {
  constructor(model) {
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

  _drawItem(item, itemBorders) {
    let _item = item < 10 ? item + SPACE : item;

    return `${itemBorders.left}${_item}${itemBorders.right}`;
  }

  _drawItemsLine() {}

  _drawDeck(items, deckBorders, itemBorders) {
    let itemsBatch = this._matrixSize,
      output = [],
      lines = [];

    for (let i = 0, end = items.length; i < end; i += itemsBatch) {
      lines = lines.concat(
        deckBorders.left, [itemBorders.top]._repeat(4),
        deckBorders.right, [LINE_BREAK],
        deckBorders.left,
        items.slice(i, i + itemsBatch),
        deckBorders.right, [LINE_BREAK],
        deckBorders.left, [itemBorders.bottom]._repeat(4),
        deckBorders.right, [LINE_BREAK]
      );
    }

    output = output.concat(
      deckBorders.top, [LINE_BREAK],
      lines,
      deckBorders.bottom
    );

    return output.join('');
  }

  _drawItems(drawData) {
    let itemBorders = this._drawBorders(DRAW_DATA.ITEM),
      deckBorders = this._drawBorders(DRAW_DATA.DECK);

    let preparedItems = this._items.map( item => this._drawItem(item, itemBorders) );

    return this._drawDeck(preparedItems, deckBorders, itemBorders);
  }

  render() {
    console.clear();
    console.log(this._drawItems(DRAW_DATA));
  }
}

export { Render }