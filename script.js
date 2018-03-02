const container = document.querySelector('#container');


createGrid(16);

//this function creates the grid and houses the change in background color code. 
function createGrid (num) {
	for(var i = 0; i < num; i++){ 
	for (var j = 0; j < num; j++){
		var div = document.createElement('div');
		document.getElementById('container').appendChild(div);
	}
	// ever time i reaches (i<?) this inserst a break starting the boxes on a new line.
	var indent = document.createElement('br');
	document.getElementById('container').appendChild(indent);
	}


/////// We need to make the code below its own function  then replace this block of text with the functino

	// This selction deals with the color. Added it here because when resizing the new divs
	// didnt respond when this was a seperate segment of code. 
	var div = document.querySelectorAll('div');
	div.forEach((div) => {
	div.addEventListener('mouseover', (e) => {
		div.style.backgroundColor = getRandomColor();
		console.log(div)
	});
	});

////// This code here does nothing yet. We need to make it work... 
	if (i > 16){
		var div = document.querySelectorAll('div');
		div.style.width = "10px";
		div.style.height = "10px";
	} 

}

// color function - generates a random color for the etch a sketch. 
// this gets used in the function changing background color
function getRandomColor () {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
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

// The wipe clean button. This resets all the divs to white thus clearing the board 
var reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
	var div = document.querySelectorAll('div');
	div.forEach((div) => {
		div.style.backgroundColor = 'white';
		console.log(div)
	});
});

//the resize button - this checks to make sure you enter a number then it erases the old grid and makes a new one.
var resize = document.querySelector('#resize');
	resize.addEventListener('click', () => {
		let num = prompt("number please")
		if (isNaN(num)){
			alert("Error! Use a number next time.")
		} else {
			eraseGrid();
			createGrid(num);
		}
	});






