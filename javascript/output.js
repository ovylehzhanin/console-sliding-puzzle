(function(game) {
	
	game.output = function() {
		var matrixSize = this.appData.matrixSize;
		var items = this.appData.items;
		
		for (var i = 0, separator = ''; i < matrixSize; i++) {
			separator += '--------';
		}

		separator += '-\n';

		console.clear();
		console.log(
			separator +
			
			items.map(function(element) {
				var lineBreak = false;

				if ( !((items.indexOf(element) + 1) % matrixSize) ) {
					lineBreak = true;
				}								

				element = '|\t' + element + '\t|';

				return lineBreak ?
					element + '\n' + separator :
					element;
			})
			
			.reduce(function(emptyString, element) {
				return emptyString + element;
			}, '')
		);
	}

})(window.barleyBreak);