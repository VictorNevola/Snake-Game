class Snake {
    constructor (positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
<<<<<<< HEAD
        this.direction = 'right';
=======
        this.olhando = 'right';
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
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
<<<<<<< HEAD
            this.direction = 'up';
            game.checkIfEatApple();
=======
            this.olhando = 'up';
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
        }
    }
    moveDown(){
        if(this.positionY < game.matriz.length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionY ++;
<<<<<<< HEAD
            this.direction = 'down';
            game.checkIfEatApple();
=======
            this.olhando = 'down';
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
        }
    }
    moveRight(){
        if(this.positionX < game.matriz[this.positionY].length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX ++;
<<<<<<< HEAD
            this.direction = 'right';
            game.checkIfEatApple();
=======
            this.olhando = 'right';
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
        }
    }
    moveLeft(){
        if(this.positionX > 0 ){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX --;
<<<<<<< HEAD
            this.direction = 'left';
            game.checkIfEatApple();
=======
            this.olhando = 'left';
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
        }
    }
}
