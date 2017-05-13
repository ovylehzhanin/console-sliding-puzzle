(function(game) {
	
	var deckSize = document.querySelector('#deckSize');
	var generateButton = document.querySelector('#generate');

	generateButton.addEventListener('click', function() {
		game
			.setMatrixSize( Number(deckSize.value) )
			.fill()
			.output();

	}, false);

	window.addEventListener('keydown', function(event) {
		
		game
			.makeMove(event.keyCode)
			.output();

	}, false);

	console.log('hello :)');

})(window.barleyBreak);