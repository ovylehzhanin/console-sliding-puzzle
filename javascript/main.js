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
	
	game.output(
		game.data.items,
		game.data.matrixSize);
	// var test = [1, 2];
	// console.log(test);
	// test.swap(0, 1);
	// console.log(test);

})(window.barleyBreak);