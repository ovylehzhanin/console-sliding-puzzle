// 
// Replace two item indexes in array
function _swap(array, a, b) {}
//
// Replace item value at 'index'
function _replace(array, index, newItemValue) {
  // add code here...
}

function _arrayRepeat(value, size) {
  let arr = [];
  
  for (let i = 0; i < size; i += 1) {
    arr[i] = value;
  }

  return arr;
}
export { _swap, _replace, _arrayRepeat }
