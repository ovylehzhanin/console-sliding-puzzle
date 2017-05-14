(function(game) {
	
	game.output = function() {
		var matrixSize = this.appData.matrixSize,
			items = this.appData.items,
			isComplete = this.appData.isComplete,
			congrats = '';
		
		for (var i = 0, separator = ''; i < matrixSize; i++) {
			separator += '--------';
		}

		separator += '-\n';

		if (isComplete) congrats = 'Congratulations!!!!111'

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
			}, '') +
			'\n' + congrats
		);

		return this;
	}

})(window.barleyBreak);