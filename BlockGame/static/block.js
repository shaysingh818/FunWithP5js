 
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



