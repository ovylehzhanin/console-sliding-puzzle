// Replace two elements in array
Array.prototype.swap = function (a, b) {
	this[b] = [this[a], this[a] = this[b]][0];
};
// Fill empty array
Object.prototype.fill = function() {
	for (var i = 0, deckLength = Math.pow(this.deckSize, 2) - 1; i < deckLength; i++) {
		this.deck[i] = i + 1;
	}	
	
	this.deck.push('  ');
};
// Hello 'array.swap()' :)
Object.prototype.move = function(direction) {
	var position = this.deck.indexOf('  ');
	
	switch (direction) {
		case 37: // move right
			(position + 1)%this.deckSize ? this.deck.swap(position, position + 1) : this.deck.swap(position, position);
			break;
		case 38: // move down
			position + this.deckSize >= this.deck.length ? this.deck.swap(position, position) : this.deck.swap(position, position + this.deckSize);
			break;
		case 39: // move left
			position%this.deckSize ? this.deck.swap(position, position - 1) : this.deck.swap(position, position);
			break;
		case 40: // move up
			position - this.deckSize < 0 ? this.deck.swap(position, position) : this.deck.swap(position, position - this.deckSize);
			break;
		default:
			break;
	}

	this.output();
};

Object.prototype.shuffle = function(steps) {
	var keyCode = null;

	while(steps) {
		keyCode = Math.floor(Math.random() * 4) + 37;
		this.move(keyCode);
		steps--;
	}
};

Object.prototype.output = function() {
	var separator = '---------------------------------\n';

	var array = this.deck.map(function(elem) {
		return '\|\t' + elem + '\t\|';
	});

	for (var col = Math.sqrt(array.length), i = col -1; i < array.length; i += col) {
		array[i] += '\n' + separator;
	}

	console.clear();
	console.log(separator + String(array).replace(/,/g, ''));
};
// Function-wrapper for contex access of Object.prototype.move()
function makeMoveFromKey(event) {
	game.move(event.keyCode);
}

function initGame() {
	// mysterious code here //
}

var GameSession = function(deckSize) {
	this.deckSize = deckSize;
	this.deck = [];
};
// Init part
var game = new GameSession(4);

game.fill();
game.shuffle(400);
game.output();

window.addEventListener('keydown', makeMoveFromKey, false);