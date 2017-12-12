import { DRAW_DATA, SPACE, TARGET_ITEM, LINE_BREAK } from './constants';

class Render {
  constructor() {}

  _drawBorders(data) {
    let line = data.HL.repeat(data.lineWidth);  

    return {
      top: `${data.TL}${line}${data.TR}`,
      left: `${data.VL}${SPACE}`,
      right: `${SPACE}${data.VL}`,
      bottom: `${data.BL}${line}${data.BR}`
    };
  }

  _drawItem(item) {
    let left = this._itemBorders.left,
      right = this._itemBorders.right;

    if (item === TARGET_ITEM) {
      left = this._emptyItemBorders.left;
      right = this._emptyItemBorders.right;
    }

    item = item < 10 ? item + SPACE : item;

    return `${left}${item}${right}`;
  }

  _drawItemsRow(row, rowIndex) {
    let t = this._horizontalBordersForItemsRow.top,
      b = this._horizontalBordersForItemsRow.bottom;

    if (rowIndex === this._targetRow) {
      t = this._horizontalBordersForItemsRow.top._replace(this._targetColumn, this._emptyItemBorders.top);
      b = this._horizontalBordersForItemsRow.bottom._replace(this._targetColumn, this._emptyItemBorders.bottom);
    }

    return [].concat(
      this._deckBorders.left, t, this._deckBorders.right,
      LINE_BREAK,
      this._deckBorders.left, row.map(item => this._drawItem(item)), this._deckBorders.right,
      LINE_BREAK, 
      this._deckBorders.left, b, this._deckBorders.right,
      LINE_BREAK
    )
    .join('');
  }

  _drawScene(items) {
    return [].concat(
      this._deckBorders.top, LINE_BREAK,
      items.map((row, rowIndex) => this._drawItemsRow(row, rowIndex)).join(''),
      this._deckBorders.bottom
    )
    .join('');
  }

  init(drawData, matrixSize) {
    this._itemBorders = this._drawBorders(drawData.ITEM);
    this._emptyItemBorders = this._drawBorders(drawData.ITEM_EMPTY);
    this._deckBorders = this._drawBorders(drawData.DECK);
    this._horizontalBordersForItemsRow = {
      top: [this._itemBorders.top]._repeat(matrixSize),
      bottom: [this._itemBorders.bottom]._repeat(matrixSize)
    };
    this._targetRow = null;
    this._targetColumn = null;
  }

  render(items, targetPosition) {
    this._targetRow = targetPosition[0];
    this._targetColumn = targetPosition[1];

    console.clear();
    console.log(this._drawScene(items));
  }
}

export { Render }