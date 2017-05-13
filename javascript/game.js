(function(game) {
	
	game.appData = {
		items: [],
		matrixSize: null,
		TARGET_ITEM: ' '
	};

	game.setMatrixSize = function(number) {
		this.appData.matrixSize = number;
		return this;
	}

	game.fill = function() {
		
		for (var i = 0, end = Math.pow(this.appData.matrixSize, 2); i < end; i++) {
			this.appData.items[i] = this.appData.items.length === end - 1 ? 
				this.appData.TARGET_ITEM : i + 1;
		}

		return this;

	}

	game.shuffle = function() {} // ...later
	
	game.makeMove = function(keyCode) {
		var items = this.appData.items,
			target = this.appData.TARGET_ITEM,
			matrixSize = this.appData.matrixSize,

			currentIndex = items.indexOf(target),
			moveToIndex = (function() {

				switch(keyCode) {
					case 37:
						return (currentIndex + 1) % matrixSize ? 
							currentIndex + 1 : currentIndex;
					case 38:
						return currentIndex < items.length - matrixSize ?
							currentIndex + matrixSize : currentIndex
					case 39:
						return currentIndex % matrixSize ?
							currentIndex - 1 : currentIndex;
					case 40:
						return currentIndex >= matrixSize ?
							currentIndex - matrixSize : currentIndex;
					default:
						return currentIndex;
				}
				
			})();

		items.swap(currentIndex, moveToIndex);

		return this;
	}
		
})(window.barleyBreak);