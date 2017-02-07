(function(game) {

	window.addEventListener('DOMContentLoaded', function() {
		
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

	}, false);

})(window.barleyBreak);


// // Replace two elements in array
// Array.prototype.swap = function (a, b) {
// 	this[b] = [this[a], this[a] = this[b]][0];
// };
	
// 	this.deck.push('  ');
// };
// // Hello 'array.swap()' :)
// Object.prototype.move = function(direction) {
// 	var position = this.deck.indexOf('  ');
	
// 	switch (direction) {
// 		case 37: // move right
// 			(position + 1)%this.deckSize ? this.deck.swap(position, position + 1) : this.deck.swap(position, position);
// 			break;
// 		case 38: // move down
// 			position + this.deckSize >= this.deck.length ? this.deck.swap(position, position) : this.deck.swap(position, position + this.deckSize);
// 			break;
// 		case 39: // move left
// 			position%this.deckSize ? this.deck.swap(position, position - 1) : this.deck.swap(position, position);
// 			break;
// 		case 40: // move up
// 			position - this.deckSize < 0 ? this.deck.swap(position, position) : this.deck.swap(position, position - this.deckSize);
// 			break;
// 		default:
// 			break;
// 	}

// 	this.output();
// };

// Object.prototype.shuffle = function(steps) {
// 	var keyCode = null;

// 	while(steps) {
// 		keyCode = Math.floor(Math.random() * 4) + 37;
// 		this.move(keyCode);
// 		steps--;
// 	}
// };

// Object.prototype.output = function() {
// 	var separator = '',
// 		col = this.deckSize;

// 	for (var i = 0; i < col; i++) {
// 		separator += '--------';
// 	}

// 	separator += '-';

// 	var array = this.deck.map(function(elem) {
// 		return '\|\t' + elem + '\t\|';
// 	});

// 	for (var j = col -1; j < array.length; j += col) {
// 		array[j] += '\n' + separator + '\n';
// 	}

// 	console.clear();
// 	console.log(separator + '\n' + String(array).replace(/,/g, ''));
// };

// var GameSession = function(deckSize) {
// 	this.deckSize = deckSize;
// 	this.deck = [];
// 	this.makeMoveFromKey = function(event) {
// 		this.move(event.keyCode);
// 	}
// };

// window.onload = function() {
// 	var generate = document.getElementById('generate');

// 	var initGame = function() {
// 		var game = new GameSession(Number(document.getElementById('setDeckSize').value));
	
// 		game.fill();
// 		game.shuffle(400);
// 		game.output();
	
// 		window.addEventListener('keydown', game.makeMoveFromKey.bind(game), false);
// 	}
// 	console.log('Hey buddy!:)\nChoose your deck size and press "Generate"');
// 	generate.addEventListener('click', initGame, false);
// };