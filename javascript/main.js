window.onload = function() {
	
	var cols = 4; // 
	var testArr = prepareArray(cols);

	function makeMove(e) {
		var position = testArr.indexOf('  ');

		switch(e.keyCode) {
			case 37: // key LEFT
				testArr.swap(position, (position + 1)%cols ? position + 1 : position);
				break;
			case 38: // key UP
				testArr.swap(position, (position + 4) >= testArr.length ? position : position + 4);
				break;
			case 39: // key RIGHT
				testArr.swap(position, position%cols ? position - 1 : position);
				break;
			case 40: // key DOWN
				testArr.swap(position, (position - 4) < 0 ? position : position - 4);
				break;
			default:
				return false;
		}

		testArr.output();
	}
	// Fancy output in browser console
	Array.prototype.output = function() {
		var separator = '---------------------------------\n';

		var array = this.map(function(elem) {
			return '\|\t' + elem + '\t\|';
		});

		for (var col = Math.sqrt(array.length), i = col -1; i < array.length; i += col) {
			array[i] += '\n' + separator;
		}

		console.clear();
		console.log(separator + String(array).replace(/,/g, ''));
	}
	// Creation of array and shuffling values
	function prepareArray(number) {
		var array = new Array(Math.pow(number, 2)),
				count = array.length - 1,
				random = 0;

		for (var i = 0; i < count; i++) {
			array[i] = i + 1;
		}
		array[array.length - 1] = '  ';
		// This shuffling method is not correct
		// (!) Need work
		while(count) {
			random = Math.floor(Math.random() * count);
			array[random] = [array[count], array[count] = array[random]][0];

			count--;
		}

		return array;
	}

	Array.prototype.swap = function(a, b) {
		var temp = this[a];
		this[a] = this[b];
		this[b] = temp;
	};	

	window.addEventListener('keydown', makeMove, false);

	testArr.output();
};


