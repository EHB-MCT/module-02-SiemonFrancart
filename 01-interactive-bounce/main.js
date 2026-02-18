let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x = 300;
let y = 300;
let speedX = 2;
let directionX = 2;
let speedY = 5;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = 30;
let speed = 10;
let colorVal = 5;

function setup() {
	//Creating a canvas to draw on, using the existing canvas element.
	createCanvas(600, 600, canvasElement);
	noStroke();
}

function draw() {
	background(220);

	// 3.1 Animate position
	x += speedX;
	y += speedY;

	// 3.2 Bounce logic: check the edges
	if (x + size / 2 > 600 || x < size / 2) {
		speedX *= -1;
	}

	if (y + size / 2 > 600 || y < size / 2) {
		speedY *= -1;
	}

	// 3.3 Draw
	circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements
let Sinput = document.querySelector("#size-input");
let Spinput = document.querySelector("#speed-input");
let Cinput = document.querySelector("#color-input");

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging
Sinput.addEventListener("input", function () {
	size = Sinput.value;
});
