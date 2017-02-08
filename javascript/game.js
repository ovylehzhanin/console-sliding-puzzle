(function(game) {
	
	game.fill = function(itemsArray, matrixSize, targetItem) {
		for (var i = 0, end = Math.pow(matrixSize, 2); i < end; i++) {
			itemsArray.length === end - 1 ?
				itemsArray[i] = targetItem :
				itemsArray[i] = i + 1;
		}
	}

	game.shuffle = function() {} // ...later
	
	game.makeMove = function() {} // ...later + use swapArrayItems()
		
})(window.barleyBreak);