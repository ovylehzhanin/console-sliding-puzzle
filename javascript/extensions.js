Array.prototype.swap = function(a, b) {
	this[a] = [this[b], this[b] = this[a]][0];
}