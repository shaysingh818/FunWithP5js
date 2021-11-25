let board = []; 
let blockPositions = []; 
let colors = ["white", "red", "green", "blue", "purple"];
let selectBlocks = [];  
let transitions = 0; 
let moves= []; 
let columnSwitch = 0; 
let x = 100; 
let y = 100; 

function initGrid(rows, cols){
	for(let i = 0; i < rows; i++){
		board[i] = []; 
		for(let j = 0; j < cols; j++){
			board[i][j] = new Block(x, y, random(colors)); 
			x += 60; 
		}
		x = 100; 
		y += 60; 
	}
}

function makeTransition(){
	let i = selectBlocks[0];
	let j = selectBlocks[1]; 
	let k = selectBlocks[3];
	let l = selectBlocks[4]; 

	let color = board[i][j].col; 
	board[i][j].setColor(board[k][l].col); 
	board[k][l].setColor(color);
	console.log(selectBlocks); 
	transitions += 1; 
	selectBlocks = []; 
}

function boardClicked(){
	if(moves.length > 1){
		// clear the transition
		moves = []
	}
	
	for(let i = 0; i < 10; i++){
		for(let j = 0; j < 10; j++){
			if(board[i][j].onBlock()){
				moves.push(board[i][j]); 
				selectBlocks.push(i, j, board[i][j].col); 
			}
		}
	}

	console.log(moves);
}


function verticalCheck(){
	// function to check if all colors are equal
	const allEqual = arr => arr.every(val => val == arr[0]); 
	let colors = [];

  	for(let i = 0; i < 10; i++){
    	colors.push(board[i][columnSwitch].col);
    	//console.log(grid[i][0].getColor());
  	}

	console.log(colors); 

	const result = allEqual(colors);

	if(result){	
      for(let i = 0; i < 10; i++){
        board[i][columnSwitch].setColor("black"); 
        //console.log(grid[i][0].getColor());
      }	
		columnSwitch += 1; 
	}

}
