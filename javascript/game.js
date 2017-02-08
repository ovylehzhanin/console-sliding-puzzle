(function(game) {
	
	game.fill = function(array, colums, targetItem) {
		for (var i = 0, end = Math.pow(colums, 2); i < end; i++) {
			array.length === end - 1 ?
				array[i] = targetItem :
				array[i] = i + 1;
		}
	}

	game.shuffle = function() {} // ...later
	
	game.swapArrayItems = function(array, a, b) {
		array[a] = [array[b], array[b] = array[a]][0];
	}

	game.makeMove = function() {} // ...later + use swapArrayItems()
		
})(window.barleyBreak);