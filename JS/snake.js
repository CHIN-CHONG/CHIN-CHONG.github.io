function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = scale * 1;
	this.ySpeed = 0;
	this.total = 0;
	this.tail = [];

	this.draw = function() {
		ctx.fillStyle = "#FFFFFF";

		for (let i = 0; i < this.tail.length; i++) {
			ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
		}
		ctx.fillRect(this.x, this.y, scale, scale);
	}
	this.gameOver = function() {
		this.total = 0;
		this.tail = [];
		this.x = 0;
		this.y = 0;
		lastDirections = [];
		this.xSpeed = 0;
		this.ySpeed = 0;
	}
	this.update = function() {
		for (let i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}

		this.tail[this.total - 1] = { x: this.x, y: this.y };

		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if (this.x > canvas.width) {
			snake.gameOver();
		}
		if (this.y > canvas.height) {
			snake.gameOver();
		}
		if (this.x < 0) {
			snake.gameOver();
		}
		if (this.y < 0) {
			snake.gameOver();
		}
	}

	this.changeDirection = function(direction, lastDirections) {
		/*switch(direction) {
			case 'Up':
				this.xSpeed = 0;
				this.ySpeed = -scale * 1;
				break;
			case 'Down':
				this.xSpeed = 0;
				this.ySpeed = scale * 1;
				break;
			case 'Right':
				this.xSpeed = scale * 1;
				this.ySpeed = 0;
				break;
			case 'Left':
				this.xSpeed = -scale * 1;
				this.ySpeed = 0;
				break;
		}*/
		if (direction === "Up" && lastDirections[lastDirections.length-2] !== 'Down') {
			this.xSpeed = 0;
			this.ySpeed = -scale * 1;
		}else if (direction === "Right" && lastDirections[lastDirections.length-2] !== 'Left') {
			this.xSpeed = scale * 1;
			this.ySpeed = 0;
		}else if (direction === "Left" && lastDirections[lastDirections.length-2] !== 'Right') {
			this.xSpeed = -scale * 1;
			this.ySpeed = 0;
		}else if (direction === "Down" && lastDirections[lastDirections.length-2] !== 'Up') {
			this.xSpeed = 0;
			this.ySpeed = scale * 1;
		}
	}

	this.eat = function(fruit) {
		if (this.x === fruit.x && this.y === fruit.y) {
			this.total++;
			return true;
		}

		return false;
	}

	this.checkCollision = function() {
		for (var i = 0; i < this.tail.length; i++) {
			if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
				snake.gameOver();
			}
		}
	}	
}



