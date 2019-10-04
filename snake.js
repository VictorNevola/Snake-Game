class Snake {
    constructor (positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.olhando = 'right';
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
            this.olhando = 'up';
        }
    }
    moveDown(){
        if(this.positionY < game.matriz.length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionY ++;
            this.olhando = 'down';
        }
    }
    moveRight(){
        if(this.positionX < game.matriz[this.positionY].length - 1){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX ++;
            this.olhando = 'right';
        }
    }
    moveLeft(){
        if(this.positionX > 0 ){
            this.prevX = this.positionX;
            this.prevY = this.positionY;
            this.positionX --;
            this.olhando = 'left';
        }
    }
}
