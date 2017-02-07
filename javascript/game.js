(function(game) {
	
	function initGame() {

		return {
			fillData: function(array, colums, targetItem) {
				
				for (var i = 0, end = Math.pow(colums, 2); i < end; i++) {
					array.length === end - 1 ?
						array[i] = targetItem :
						array[i] = i + 1;
				}

			},

			makeShuffle: function() {}
		};

	}

	game.initGame = initGame();
	// Render all data to console
	function output() {

		return function(array, colums) {

			for (var i = 0, separator = ''; i < colums; i++) {
				separator += '--------';
			}

			separator += '-';

			console.clear();
			console.log(
				separator + '\n' + 
				String(
					array.map(function(element) {
						var lineBreak = false;

						if ( !((array.indexOf(element) + 1) % colums) ) {
							lineBreak = true;
						}								

						element = '|\t' + element + '\t|';

						return lineBreak ?
							element + '\n' + separator + '\n' :
							element;
					})
				).replace(/,/g, '')
			);

		};

	}

	game.output = output();

})(window.barleyBreak);