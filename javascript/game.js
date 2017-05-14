(function(game) {
	
	game.appData = {
		items: [],
		matrixSize: null,
		TARGET_ITEM: ' ',
		isComplete: false
	};

	game.setMatrixSize = function(number) {
		this.appData.matrixSize = number;
		return this;
	}

	game.getMatrixSize = function() {
		return this.appData.matrixSize;
	}

	game.fill = function() {
		this.appData.items = [];

		for (var i = 0, end = Math.pow(this.appData.matrixSize, 2); i < end; i++) {
			this.appData.items[i] = this.appData.items.length === end - 1 ? 
				this.appData.TARGET_ITEM : i + 1;
		}

		return this;
	}

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
		
	game.shuffle = function() {
		for (var i = 0; i < 1000; i++ ) {
			game.makeMove(Math.floor(Math.random() * (41 - 37) + 37));
		}

		return this;
	}

	game.checkCompletion = function() {
		var array = this.appData.items.map(function(e) { return e; });
		
		for (var i = 0; i < array.length - 2; i++) {
			if (array[i+1] - array[i] !== 1) {
				this.appData.isComplete = false;
				return this;
			}
		}

		this.appData.isComplete = true;
		return this;
	}

})(window.barleyBreak);