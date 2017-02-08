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
	
	// game.output(
	// 	game.data.items,
	// 	game.data.colums);
	var test = [1, 2];
	console.log(test);
	test.swap(0, 1);
	console.log(test);

})(window.barleyBreak);