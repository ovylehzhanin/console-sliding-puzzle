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

  _drawDeck(items) {
    let itemsBatch = this._matrixSize,
      output = [];

    for (let i = 0, end = items.length; i < end; i += itemsBatch) {
      output = output.concat(items.slice(i, i + itemsBatch), [LINE_BREAK]);
    }

    return output.join('');
  }

  _drawItems(drawData) {
    let itemBorders = this._drawBorders(DRAW_DATA.ITEM),
      deckBorders = this._drawBorders(DRAW_DATA.DECK);

    let preparedItems = this._items.map( item => this._drawItem(item, itemBorders) );

    return this._drawDeck(preparedItems);
  }

  render() {
    console.clear();
    console.log(this._drawItems(DRAW_DATA));
  }
}

export { Render }