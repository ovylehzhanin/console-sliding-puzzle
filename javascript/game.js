(function(game) {
	
	game.fill = function(itemsArray, matrixSize, targetItem) {
		for (var i = 0, end = Math.pow(matrixSize, 2); i < end; i++) {
			itemsArray.length === end - 1 ?
				itemsArray[i] = targetItem :
				itemsArray[i] = i + 1;
		}
	}

	game.shuffle = function() {} // ...later
	
	game.makeMove = function(keyCode, itemsArray, matrixSize, targetItem) {
		var currentPosition = itemsArray.indexOf(targetItem),

			moveToPosition = (function() {

				switch(keyCode) {
					case 37:
						return (currentPosition + 1) % matrixSize ? 
							currentPosition + 1 : currentPosition;
					case 38:
						return currentPosition < itemsArray.length - matrixSize ?
							currentPosition + matrixSize : currentPosition
					case 39:
						return currentPosition % matrixSize ?
							currentPosition - 1 : currentPosition;
					case 40:
						return currentPosition >= matrixSize ?
							currentPosition - matrixSize : currentPosition;
					default:
						return currentPosition;
				}
				
			})();

		itemsArray.swap(currentPosition, moveToPosition);
	}
		
})(window.barleyBreak);