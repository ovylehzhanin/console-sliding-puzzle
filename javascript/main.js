(function(game) {
	
	document.getElementById('generate').addEventListener('click', function() {
		var deckSize = Number(document.getElementById('deckSize').value),
			matrixSize = game.getMatrixSize();

		if (!matrixSize || matrixSize !== deckSize) {
			game.setMatrixSize(deckSize)
				.fill();
		}

		game.shuffle()
			.output();

	}, false);

	window.addEventListener('keydown', function(event) {
		game.makeMove(event.keyCode)
			.output();
	}, false);

})(window.barleyBreak);