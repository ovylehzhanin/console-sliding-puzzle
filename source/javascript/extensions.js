// Replace two item indexes in array
Array.prototype._swap = function (a, b) {
  this[a] = [this[b], this[b] = this[a]][0];
};

// Replace item value at 'index'
Array.prototype._replace = function (index, newItem) {
  const DELETE_COUNT = 1;
  let copy = this.slice();
  copy.splice(index, DELETE_COUNT, newItem);

  return copy;
};

Array.prototype._repeat = function (size) {
  let result = [];

  for (let i = 0; i < size; i += 1) {
    result = result.concat(this);
  }

  return result;
};