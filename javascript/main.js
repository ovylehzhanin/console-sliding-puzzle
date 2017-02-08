(function(game) {
		
	game.data = {
		items: [],
		matrixSize: 4,
		TARGET_ITEM: ' '
	};
	
	game.fill(
		game.data.items,
		game.data.matrixSize,
		game.data.TARGET_ITEM);
	
	window.addEventListener('keydown', function(event) {
		
		game.makeMove(
			event.keyCode,
			game.data.items,
			game.data.matrixSize,
			game.data.TARGET_ITEM);

		game.output(
			game.data.items,
			game.data.matrixSize);

	}, false);

})(window.barleyBreak);