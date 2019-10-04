class Snake {
    constructor (positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = 'right';
        this.prevX ;
        this.prevY ;
        this.size = 0;
        this.bodySnake = [];
    }
    moveUp(){
        if(this.positionY > 0){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionY --;
            this.direction = 'up';
            game.checkIfEatApple();
        }
    }
    moveDown(){
        if(this.positionY < game.matriz.length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionY ++;
            this.direction = 'down';
            game.checkIfEatApple();
        }
    }
    moveRight(){
        if(this.positionX < game.matriz[this.positionY].length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX ++;
            this.direction = 'right';
            game.checkIfEatApple();
        }
    }
    moveLeft(){
        if(this.positionX > 0 ){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX --;
            this.direction = 'left';
            game.checkIfEatApple();
        }
    }
}
