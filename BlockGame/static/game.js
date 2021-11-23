let screenWidth = 1000; 
let screenHeight = 1000;


function preload(){
    loadGrid(); 
}

function setup(){
	console.log(grid); 
    createCanvas(screenWidth, screenHeight);    
}

function keyPressed(){
	if(keyCode == 72){
		switchBlocks(); 
	}
}

// capture which block from the array was pressed
function mousePressed(){

	checkGrid(); 

	if(moves.length > 1){
		
		console.log(gridIndices);
		let color = grid[0][1].col;
		//grid[0][1].setColor(grid[0][0].col);
		//grid[0][0].setColor(color); 
		moves = [];  

	}

	// checks of grid is clicked
	for(let i = 0; i < 10; i++){
		for(let j = 0; j < 10; j++){
			if(grid[i][j].onBlock()){
				moves.push(grid[i][j]);
				gridIndices.push(i, j, grid[i][j].col); 
			} 
		}
	}

	
	
	console.log(moves);
}


function draw(){
    // set
    background("black");
	fill("red");
	textSize(30);
	text("Transitions: " + transitions, 750, 150);
	fill("white");

	textSize(25); 
	fill("white"); 
	text("Click on two blocks, press H to make transition", 100, 765); 
	// greens
	textSize(20);	
	text(0, 825, 280);
	fill("green"); 
	square(800, 200, 55); 

	// reds	
	textSize(20);
	fill("white"); 	
	text(0, 825, 380);
	fill("red"); 
	square(800, 300, 55);

	 
	// blues	
	textSize(20);
	fill("white"); 	
	text(0, 825, 480);
	fill("blue"); 
	square(800, 400, 55);

	
	// purples	
	textSize(20);
	fill("white"); 	
	text(0, 825, 580);
	fill("purple"); 
	square(800, 500, 55);


	// whites
	textSize(20);
	fill("white"); 	
	text(0, 825, 680);
	fill("white"); 
	square(800, 600, 55);

 
	for(let i = 0; i < 10; i++){
		for(let j = 0; j < 10; j++){
			grid[i][j].display(); 
		}
	}

	//checkGrid(); 



}







