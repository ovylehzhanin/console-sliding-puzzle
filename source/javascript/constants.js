// One-space character for empty item
const SPACE = ' ';

// Unicode 'Box Drawing' characters:
// https://en.wikipedia.org/wiki/Box-drawing_character
const DRAW_DATA = {
  // Abbreviations: 
  //  'HL' - Horizontal Line
  //  'VL' - Vertical line
  //  'TL' - Top-left corner
  //  'TR' - Top-right corner
  //  'BL' - Bottom-left corner
  //  'BR' - Bottom-right corner
  // ****
  // Default deck borders
  // ═ , ║ , ╔ , ╗ , ╚ , ╝
  DECK: {
    HL: '═', VL: '║',
    TL: '╔', TR: '╗',
    BL: '╚', BR: '╝',
    lineWidth: 26
  },
  // ****
  // Default item borders
  // ━ , ┃ , ┏ , ┓, ┗ , ┛
  ITEM: {
    HL: '━', VL: '┃',
    TL: '┏', TR: '┓',
    BL: '┗', BR: '┛',
    lineWidth: 4
  },

  ITEM_EMPTY: {
    HL: SPACE, VL: SPACE,
    TL: SPACE, TR: SPACE,
    BL: SPACE, BR: SPACE,
    lineWidth: 4
  }
}; 

const TARGET_ITEM = SPACE;

export { DRAW_DATA, TARGET_ITEM, SPACE }
