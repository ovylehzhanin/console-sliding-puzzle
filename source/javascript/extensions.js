// Replace two item indexes in array
Array.prototype._swap = function (a, b) {
  this[a] = [this[b], this[b] = this[a]][0];
};

// Replace item value at 'index'
function _replace(array, index, newItemValue) {
  // add code here...
}

Array.prototype._repeat = function (size) {
  let result = [];

  for (let i = 0; i < size; i += 1) {
    result = result.concat(this);
  }

  return result;
}

function _arrayRepeat(value, size) {
  let arr = [];
  
  for (let i = 0; i < size; i += 1) {
    arr[i] = value;
  }

  return arr;
}

export { _replace, _arrayRepeat }
