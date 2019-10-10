let matrizDiv = document.querySelector('#matriz');
class Game {
    constructor (snake) {
        this.snake = snake;
        this.matriz = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //25 column X  23 row
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ];
        this.movements;
    }
    startGame(){
        this.movements = setInterval(()=>{
            switch(this.snake.direction){
                case 'up':
                    this.snake.moveUp();
                    break;
                case 'down':
                    this.snake.moveDown();
                    break;
                case 'left':
                    this.snake.moveLeft();
                    break;
                case 'right':
                    this.snake.moveRight();
                    break;
                default:
                    break;
            }
            this.updateMatriz();
        },1000);
    }
    randonApple(){
        let randomPositionY = Math.floor(Math.random() * this.matriz.length);
        let randomPositionX = Math.floor(Math.random() * this.matriz.length);
        while(this.matriz[randomPositionY][randomPositionX] != 0){
            randomPositionY = Math.floor(Math.random() * this.matriz.length);
            randomPositionX = Math.floor(Math.random() * this.matriz.length);
        };
        this.matriz[randomPositionY][randomPositionX] = 2;
    }
    checkIfEatApple(){
        let positionHeadSnake = this.matriz[this.snake.positionY][this.snake.positionX];
            if(positionHeadSnake == 2){
                this.randonApple();
                this.snake.size += 1;
                this.snake.pontuation += 1;
            }
    }
    createBodySnake(){
        let diference = this.snake.bodySnake.length - this.snake.size;
        let remove = this.snake.bodySnake.splice(this.snake.size, diference);
            this.snake.bodySnake.forEach((element,index)=>{
                if(index === 0 ){
                    this.matriz[element[0]][element[1]] = 1;
                }else {
                    this.matriz[element[0]][element[1]] = 3;
                }
            })
            remove.forEach((element)=>{
                this.matriz[element[0]][element[1]] = 0;
            })
    }
    createMatriz(){
        this.matriz.forEach((itens,index1)=> {
            let row = document.createElement('div');
                row.setAttribute ('class', 'row');
            itens.forEach((item, index2)=>{
                let column = document.createElement('div');
                    column.setAttribute('class', 'column');
                    column.setAttribute('id',`${index1}, ${index2}`);
                    if(item == 1){
                        column.classList.add('headSnake');
                    }
                    if(item == 2){
                        column.classList.add('apple');
                    }
                    row.appendChild(column);
            })
            matrizDiv.appendChild(row);
        });
    }
    updateMatriz(){
        if(this.snake.dead === false){
            this.matriz.forEach((itens,index1) => {
                itens.forEach((item,index2) => {
                    let element = document.getElementById(`${index1}, ${index2}`);
                    element.classList.remove('apple');
                    element.classList.remove('headSnake');
                    element.classList.remove('bodySnake');
                    if(item === 1){
                        element.classList.add('headSnake');
                    }
                    if(item === 2){
                        element.classList.add('apple');
                    }
                    if(item === 3){
                        element.classList.add('bodySnake');
                    }
                });
            });
        };
        }
    gameOver(){
        let matriz = document.getElementById('matriz');
        var div = document.createElement('div');
            div.setAttribute('class', 'GameOver');
            div.innerHTML = `<img src="./imagens/gameOver.gif" alt="GameOver.logo" title='YOU ARE DEAD'>	
                <h2> Game Over </h2>
                <p>Your score in this round was 
                ${this.snake.pontuation}</P>
                <div id = 'buttons' class = "buttonGameOver"> </div>
                <button id = 'retry' class = "buttonGameOver"> PLAY AGAIN </button>
                <button id = 'newPlay' class = "buttonGameOver"> NEW PLAYER </button>
            `
        matriz.appendChild(div);
        let row = document.querySelectorAll('.row');
        row.forEach(element => {
            element.remove();
        })
    }
}
