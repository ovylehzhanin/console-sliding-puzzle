Array.prototype.swap = function(a, b) {
  this[a] = [this[b], this[b] = this[a]][0];
};

Array.prototype.replaceItemAt = function(index, newItem) {
  let copy = this.map(item => item);
  copy.splice(index, 1, newItem);

  return copy;
};