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
	// // Test
	// var testArr = [1, 2, 3];
	// console.log(testArr)
	// game.swapArrayItems(testArr, 0, 1);
	// console.log(testArr)
	game.output(
		game.data.items,
		game.data.colums);

})(window.barleyBreak);