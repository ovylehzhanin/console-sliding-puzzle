(function(game) {
		
	game.data = {
		items: [],
		colums: 4,
		TARGET_ITEM: ' '
	};
	
	game.fill(
		game.data.items,
		game.data.colums,
		game.data.TARGET_ITEM);
	
	game.output(
		game.data.items,
		game.data.colums);

})(window.barleyBreak);