class Snake {
    constructor (positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = 'right';
        this.prevX ;
        this.prevY ;
        this.size = 1;
        this.pontuation = 0;
        this.bodySnake = [[this.positionY, this.positionX]];
        this.dead = false;
    }
    moveUp(){
            if(this.dead === false){
                this.positionY --;
                let checkPosition = this.checkIfSnakeHit();
                if(checkPosition === false){
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'up';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }else{game.gameOver()};
            }
    }
    moveDown(){
            if(this.dead === false){
                this.positionY ++;
                let checkPosition = this.checkIfSnakeHit();
                if(checkPosition === false){
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'down';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }else{game.gameOver()};
            }
    }
    moveRight(){
            if(this.dead === false){
                this.positionX ++;
                let checkPosition = this.checkIfSnakeHit();
                if(checkPosition === false){
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'right';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }else{game.gameOver()};
            }
    }
    moveLeft(){
            if(this.dead == false){
                this.positionX --;
                let checkPosition = this.checkIfSnakeHit();
                if(checkPosition === false){
                    this.prevX = this.positionX;
                    this.prevY = this.positionY;
                    this.direction = 'left';
                    this.bodySnake.unshift([this.positionY, this.positionX]);
                    game.checkIfEatApple();
                    game.createBodySnake();
                }else{game.gameOver()};
            }
    }
    checkIfSnakeHit(){
            if(this.positionY < 0 || this.positionX < 0 || this.positionY > game.matriz.length - 1
                || this.positionX > game.matriz[this.positionY].length - 1 || game.matriz[this.positionY][this.positionX] === 3){
                clearInterval(game.movements);
                this.dead = true;
                return true;
            }
            return false;
    }
}
