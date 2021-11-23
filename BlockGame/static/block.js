let grid = []; 
let colors = ["white", "red", "green", "blue", "purple"];
// checks for 2 or more blocks
let moves = [];
let vectors = [];
let gridIndices = [];
let columnCount = 0; 
let transitions = 0; 
 
// block grid object  
class Block {

    constructor(setX, setY, setColor){
        this.x = setX; 
        this.y = setY;
        this.col = setColor;
    }

    move(){
      this.x -= 120; 
    }

    setColor(color){
        this.col = color; 
    }

    getColor(){
        return this.col; 
    }

    onBlock(){
        let originalColor = this.color; 
        if((mouseX > this.x) && (mouseX < this.x+55) && (mouseY > this.y) && (mouseY < this.y+55)){
            return true;  
        }else{
            return false; 
        }

    }

    display(){
        fill(this.col); 
        square(this.x, this.y, 55)
        //noLoop(); 
    }

}

function loadGrid(){

	let x = 100; 
    let y = 100; 
	for(let i = 0; i < 10; i++){
		grid[i] = [];
		for(let j = 0; j < 10; j++){
			grid[i][j] = new Block(x, y, random(colors)); 
			x += 60; 
		}
		x = 100; 
		y += 60; 	
	}
}

function switchBlocks(){
	
	console.log(gridIndices); 	
	let firstX = gridIndices[0];	
	let firstY = gridIndices[1];	
	let secondX = gridIndices[3];	
	let secondY = gridIndices[4];

	let color = grid[firstX][firstY].col;
	grid[firstX][firstY].setColor(grid[secondX][secondY].col);
	grid[secondX][secondY].setColor(color);
    transitions += 1; 
	gridIndices = [];  

}

function checkGrid(){
    // get first color of the grid

  const allEqual = arr => arr.every(val => val === arr[0]);
    
  let colors = [];

  // check if full vertical row is present in matrix 
  for(let i = 0; i < 10; i++){
    colors.push(grid[i][columnCount].getColor());
    //console.log(grid[i][0].getColor());
  }

  const result = allEqual(colors); 

  if(result == true){
      console.log("Grid is all the same");
      for(let i = 0; i < 10; i++){
        grid[i][columnCount].setColor("black"); 
        //console.log(grid[i][0].getColor());
      }
    

      columnCount += 1;  
  }

}  
