var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	//Generate new colors
	colors = generateRandomColors(6);
	//Pick a new random color array
	pickedColor = pickColor();
	//Change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//Change colors of squares
	for (i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
	}
})

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
})


for (i = 0; i < squares.length; i++) {
	//Add initial color to squares
	squares[i].style.backgroundColor = colors[i];

	//Add click listeners
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//Loop through all squares
	for (i = 0; i < squares.length; i++) {
		//Change each color to match given color
		squares[i].style.backgroundColor = color;
	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Make array
	var arr = [];
	//Add num random colors to array
	for (i = 0; i < num; i++) {
		//Get random color and push into arr
		arr.push(randomColor());
	}
	//Return array
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}