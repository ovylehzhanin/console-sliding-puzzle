import { _sfcc } from './extensions'

// One-space character for empty item
const SPACE_CODE = '0x0020';

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
    HL: '0x2550', VL: '0x2551',
    TL: '0x2554', TR: '0x2557',
    BL: '0x255A', BR: '0x255B'
  },
  // ****
  // Default item borders
  // ━ , ┃ , ┏ , ┓, ┗ , ┛
  ITEM: {
    HL: '0x2501', VL: '0x2503',
    TL: '0x250F', TR: '0x2513',
    BL: '0x2517', BR: '0x251B'
  }
}; 

const TARGET_ITEM = _sfcc(SPACE_CODE);

export { DRAW_DATA, TARGET_ITEM }
