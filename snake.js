class Snake {
    constructor (positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = 'right';
        this.prevX ;
        this.prevY ;
        this.size = 1;
        this.bodySnake = [[this.positionY, this.positionX]];
        this.dead = false;
    }
    moveUp(){
            if(this.dead == false){
                this.positionY --;
                if(this.positionY < 0){
                    clearInterval(game.movements);
                    this.dead = true;
                }else {
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'up';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }
            }
    }
    moveDown(){
            if(this.dead == false){
                this.positionY ++;
                if(this.positionY > game.matriz.length - 1){
                    clearInterval(game.movements);
                    this.dead = true;
                }else{
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'down';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }
            }
    }
    moveRight(){
            if(this.dead == false){
                this.positionX ++;
                if(this.positionX > game.matriz[this.positionY].length - 1){
                    clearInterval(game.movements);
                    this.dead = true;
                }else{
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'right';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }
            }
    }
    moveLeft(){
            if(this.dead == false){
                this.positionX --;
                if(this.positionX < 0 ){
                    clearInterval(game.movements);
                    this.dead = true;
                }
                else{
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'left';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }
            }
    }
}
