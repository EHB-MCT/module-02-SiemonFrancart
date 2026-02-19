let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x = 300;
let y = 300;
let speedX = Math.random(0, 10);
let directionX = 2;
let directionY = 2;
let speedY = Math.random(0, 10);

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = 30;
let speed = 10;
let colorVal = "red";

function setup() {
	//Creating a canvas to draw on, using the existing canvas element.
	createCanvas(600, 600, canvasElement);
	noStroke();
}

function draw() {
	background(220);

	// 3.1 Animate position
	x += speedX * directionX;
	y += speedY * directionY;

	// 3.2 Bounce logic: check the edges
	if (x + size / 2 > 600 || x < size / 2) {
		directionX *= -1;
	}

	if (y + size / 2 > 600 || y < size / 2) {
		directionY *= -1;
	}

	// 3.3 Draw
	fill(colorVal);
	circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements
let Sinput = document.querySelector("#size-input");
let Spinput = document.querySelector("#speed-input");
let Cinput = document.querySelector("#color-input");

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging
Sinput.addEventListener("input", function () {
	size = Number(Sinput.value);
});

Spinput.addEventListener("input", function () {
	speedX = Number(Spinput.value);
	speedY = Number(Spinput.value) / 2;
});

Cinput.addEventListener("input", function () {
	colorVal = Cinput.value;
});
