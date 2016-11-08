window.onload = function() {
	/* Use static array for testing */
	var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "_"];
	/* Need to optimize it!!! */
	var cols = Math.sqrt(testArr.length);

	function makeMove(e) {
		var position = testArr.indexOf("_");

		switch(e.keyCode) {
			case 37: // key LEFT
				testArr.swap(position, (position + 1)%cols ? position + 1 : position);
				break;
			case 38: // key UP
				testArr.swap(position, (position + 4) > testArr.length ? position : position + 4);
				break;
			case 39: // key RIGHT
				testArr.swap(position, position%cols ? position - 1 : position);
				break;
			case 40:
				testArr.swap(position, (position - 4) < 0 ? position : position - 4);
				break;
			default:
				return false;
		}

		testArr.output();
	}
	/* Ohh, this prototypes */
	Array.prototype.output = function() {
		var separator = '---------------------------------\n';

		var array = this.map(function(elem) {
			return '\|\t' + elem + '\t\|';
		});

		for (var col = Math.sqrt(array.length), i = col -1; i < array.length; i += col) {
			array[i] += '\n' + separator;
		}

		console.clear();
		console.log(separator + String(array).replace(/,/g, ""));
	}

	Array.prototype.swap = function(a, b) {
		var temp = this[a];
		this[a] = this[b];
		this[b] = temp;
	};	

	window.addEventListener('keydown', makeMove, false);

	testArr.output();
};


