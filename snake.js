class Snake {
    constructor (positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = 'right';
        this.prevX ;
        this.prevY ;
        this.size = 1;
        this.bodySnake = [[this.positionY, this.positionX]];
    }
    moveUp(){
        if(this.positionY > 0){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionY --;
            this.direction = 'up';
            this.bodySnake.unshift([this.positionY, this.positionX]);
            game.checkIfEatApple();
            game.createBodySnake();
        }
    }
    moveDown(){
        if(this.positionY < game.matriz.length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionY ++;
            this.direction = 'down';
            this.bodySnake.unshift([this.positionY, this.positionX]);
            game.checkIfEatApple();
            game.createBodySnake();
        }
    }
    moveRight(){
        if(this.positionX < game.matriz[this.positionY].length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX ++;
            this.direction = 'right';
            this.bodySnake.unshift([this.positionY, this.positionX]);
            game.checkIfEatApple();
            game.createBodySnake();
        }
    }
    moveLeft(){
        if(this.positionX > 0 ){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX --;
            this.direction = 'left';
            this.bodySnake.unshift([this.positionY, this.positionX]);
            game.checkIfEatApple();
            game.createBodySnake();
        }
    }
}
