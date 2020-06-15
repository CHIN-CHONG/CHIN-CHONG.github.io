const canvas = document.querySelector(".game");
const ctx = canvas.getContext("2d");
const scale = 50;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
	snake = new Snake();
	fruit = new Fruit();
	fruit.pickLocation();
	snake.draw();

	window.setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.update();
		fruit.draw();
		snake.draw();

		if (snake.eat(fruit)) {
			fruit.pickLocation();
		}
		if ((fruit.x >= canvas.width) || (fruit.y >= canvas.height)) {
			fruit.pickLocation();
		}

		snake.checkCollision();
		document.querySelector('.mscore')
			.innerText = snake.total; 
	}, 100);
}());
var lastDirections = []
window.addEventListener('keydown', ((evt) => {
	console.log(evt);
	const direction = evt.key.replace('Arrow', '');
	if (lastDirections[lastDirections.length-1] !== evt.key.replace('Arrow', '')) {
		lastDirections.push(evt.key.replace('Arrow', ''));
	}
	if (lastDirections.length > 10) {
		lastDirections.splice(0, 9);
	}
	console.log(lastDirections);
	console.log(lastDirections[lastDirections.length-1]);
	snake.changeDirection(direction, lastDirections);
	
	
}));


