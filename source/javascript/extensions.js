// Replace two item indexes in array
Array.prototype._swap = function (a, b) {
  let a0 = a[0], a1 = a[1],
    b0 = b[0], b1 = b[1];

  this[a0][a1] = [this[b0][b1], this[b0][b1] = this[a0][a1]][0];
  return [b0, b1];
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