(function(game) {
	
	game.fill();
	game.output();

	

	window.addEventListener('keydown', function(event) {
		
		game.makeMove(event.keyCode);
		game.output();

	}, false);

})(window.barleyBreak);