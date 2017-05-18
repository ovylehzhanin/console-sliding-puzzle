var barleyBreak = barleyBreak || {};

(function(game) {
	
	game.output = function() {
		var matrixSize = this.matrixSize(),
			items = this.appData.items,
			isComplete = this.appData.isComplete,
			congrats = '',
			steps = 'Steps:\t' + this.appData.stepsCounter;
		
		for (var i = 0, separator = ''; i < matrixSize; i++) {
			separator += '--------';
		}

		separator += '-\n';

		if (isComplete) congrats = 'C-O-N-G-R-A-T-U-L-A-T-I-O-N-S!!!!!1';

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
			'\n' + steps +
			'\n' + congrats
		);

		return this;
	}

})(window.barleyBreak);