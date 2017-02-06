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
	function output() {}

})(window.braleyBreak);