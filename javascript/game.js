(function(game) {
	
	game.fill = function(array, colums, targetItem) {
		for (var i = 0, end = Math.pow(colums, 2); i < end; i++) {
			array.length === end - 1 ?
				array[i] = targetItem :
				array[i] = i + 1;
		}
	}

	game.shuffle = function() {} // ...later
	
	game.swapArrayItems = function(array, a, b) {
		array[a] = [array[b], array[b] = array[a]][0];
	}

	game.makeMove = function() {} // ...later + use swapArrayItems()
	// Render all data to console
	game.output = function(array, colums) {
		for (var i = 0, separator = ''; i < colums; i++) {
			separator += '--------';
		}

		separator += '-\n';

		console.clear();
		console.log(
			separator +
			array
			
			.map(function(element) {
				var lineBreak = false;

				if ( !((array.indexOf(element) + 1) % colums) ) {
					lineBreak = true;
				}								

				element = '|\t' + element + '\t|';

				return lineBreak ?
					element + '\n' + separator:
					element;
			})
			
			.reduce(function(emptyString, element) {
				return emptyString + element;
			}, '')
		);
	}
	
})(window.barleyBreak);