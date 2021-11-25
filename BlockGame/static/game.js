let screenWidth = 1000; 
let screenHeight = 1000;


function preload(){
	initGrid(10, 10); 
    //loadGrid(); 
}

function setup(){
	console.log(board); 
    createCanvas(screenWidth, screenHeight);    
}

function keyPressed(){
	if(keyCode == 72){
		makeTransition(); 
	}
}

// capture which block from the array was pressed
function mousePressed(){

	boardClicked();
	verticalCheck();  

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
			board[i][j].display(); 
		}
	}

	//checkGrid(); 



}







