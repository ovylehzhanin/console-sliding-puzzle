(function(game) {
	
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