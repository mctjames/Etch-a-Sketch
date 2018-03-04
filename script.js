const container = document.querySelector('#container');

// creates the defualt grid at 16*16 so the page starts with something active
createGrid(16);


//this function creates the grid and houses the change in background color code as well as the resizing stuff.  
function createGrid (num) {
	for(var r = 0; r < num; r++){ 
	for (var c = 0; c < num; c++){
		var div = document.createElement('div');
		document.getElementById('container').appendChild(div);
	}
	// ever time i equals the num (i<num) this insersts a break starting the boxes on a new line.
	var indent = document.createElement('br');
		document.getElementById('container').appendChild(indent);
	}

	// this adjusts the size of the divs so that they fit the container regardless of 
	// how how many there are. 4 squares =  big while 64 squarees = very small.
	var div = document.querySelectorAll('div');
		div.forEach((div) =>{
		div.setAttribute("style", "height: " + 500/num + "px; width: " + 500/num+ "px;");
		document.getElementById('container').appendChild(div);
	});

	// this activates the black color for the first etch a sketch. without we have to click a color initially. 
	var div = document.querySelectorAll('div');
			div.forEach((div) => {
			div.addEventListener('mouseover', (e) => {
				div.style.backgroundColor = "black";
			});
		});

	// This selction deals with the color. Added it here because when resizing the new divs
	// didnt respond when this was a seperate segment of code. 
	var black = document.querySelector('#black');
	black.addEventListener('click', () => {
		var div = document.querySelectorAll('div');
			div.forEach((div) => {
			div.addEventListener('mouseover', (e) => {
				div.style.backgroundColor = "black";
			});
		});
	});
	// This calls on the rainbow button to then make the mouseover action rainbow
	var rainbow = document.querySelector('#rainbow');
	rainbow.addEventListener('click', () => {
		var div = document.querySelectorAll('div');
			div.forEach((div) => {
			div.addEventListener('mouseover', (e) => {
				div.style.backgroundColor = getRandomColor();
			});
		});
	});
};	

// color function - generates a random color for the etch a sketch. 
// this gets used in the function changing background color
function getRandomColor () {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var r = 0; r < 6; r++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// this function erases the old grid. It is used in the resize button click.
function eraseGrid(){
	var div = document.getElementById('container');
		while (div.firstChild) div.removeChild( div.firstChild)
	var indent = document.getElementById('container');
		while (indent.firstChild) div.removeChild( indent.firstChild);
}

// The wipe clean button - This resets all the divs to white thus clearing the board 
var reset = document.querySelector('#reset');
	reset.addEventListener('click', () => {
	var div = document.querySelectorAll('div');
	div.forEach((div) => {
		div.style.backgroundColor = 'white';
	});
});

//the resize button - this checks to make sure you enter a number then it erases the old grid and makes a new one after checking a coulpe conditions. 
// I capped the grid at 35*35 because it was adding strange spaces 
var resize = document.querySelector('#resize');
	resize.addEventListener('click', () => {
		let input = prompt("Please pick a number between 1 and 100.")
		if (isNaN(input)){
			alert("Error! Use a number next time.")
		} if (input > 100){
			alert("That is madness. Let's work with something more like 4*4")
			eraseGrid();
			createGrid(4);
		} else {
			eraseGrid();
			createGrid(input);
		}
	});




