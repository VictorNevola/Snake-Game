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
<<<<<<< HEAD
        this.randonApple();
    }
    startGame(){
        let id = setInterval(()=>{
            switch(this.snake.direction){
=======
        this.apple = [Math.floor(Math.random() * this.matriz.length),Math.floor(Math.random() * this.matriz.length)];
    }
    startGame(){
        let id = setInterval(()=>{
            switch(this.snake.olhando){
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
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
<<<<<<< HEAD
        },1000)
    }
    randonApple(){
        let randomPositionY = Math.floor(Math.random() * this.matriz.length);
        let randomPositionX = Math.floor(Math.random() * this.matriz.length);
        this.matriz[randomPositionY][randomPositionX] = 2;
    }
    checkIfEatApple(){
        let positionHeadSnake = this.matriz[this.snake.positionY][this.snake.positionX];
            if(positionHeadSnake == 2){
                this.randonApple();
                this.snake.size +=1;
            }
    }
    createMatriz(){
        this.matriz[this.snake.positionY][this.snake.positionX] = 1;
=======
        },100)
    }
    createMatriz(){
        this.matriz[this.snake.positionY][this.snake.positionX] = 1;
        this.matriz[this.apple[0]][this.apple[1]] = 2;
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
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
        this.matriz[this.snake.prevY][this.snake.prevX] = 0;
        this.matriz[this.snake.positionY][this.snake.positionX] = 1;
        this.matriz.forEach((itens,index1) => {
            itens.forEach((item,index2) => {
<<<<<<< HEAD
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
=======
                if(item === 1){
                    let head = document.getElementById(`${index1}, ${index2}`);
                        head.classList.remove('apple');
                        head.classList.remove('bodySnake');
                        head.classList.add('headSnake');
                }
                if(item === 0){
                    let blank = document.getElementById(`${index1}, ${index2}`);
                        blank.classList.remove('apple');
                        blank.classList.remove('headSnake');
                        blank.classList.remove('bodySnake');
                }
                if(item === 3){
                    let body = document.getElementById(`${index1}, ${index2}`);
                        body.classList.remove('apple');
                        body.classList.remove('headSnake');
                        body.classList.remove('bodySpace');
                        body.classList.add('bodySnake');
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
                }
            });
        });
    };
<<<<<<< HEAD

=======
>>>>>>> 47b3fc0b7ff94c5bc1ef80ef4a2420d152c22a49
    //     let snake = document.getElementsByClassName('headSnake')[0];
    //     let tail = document.querySelectorAll('.bodySnake');
    //         // Create Random Apple on Matriz
    //         if (snake.classList.contains('apple')){
    //             snake.classList.remove('apple');
    //             this.snake.size += 1;
    //         let randomPositionY = Math.floor(Math.random() * this.matriz.length);
    //         let randomPositionX = Math.floor(Math.random() * this.matriz.length);
    //             this.matriz[randomPositionY][randomPositionX] = 2;
    //         let newApple = document.getElementById(`${randomPositionY}, ${randomPositionX}`);
    //             newApple.classList.add('apple');
    //         let sizeSnake = document.getElementById(`${this.snake.prevY}, ${this.snake.prevX}`);
    //             sizeSnake.classList.add('bodySnake');
    //             this.snake.bodySnake.push([`${this.snake.prevY}, ${this.snake.prevX}`]);

    //             this.matriz[this.snake.prevY][this.snake.prevX] = 3;

    //         }
    //             snake.classList.remove('headSnake');
    //     let positionSnakeAtual = document.getElementById(`${this.snake.positionY}, ${this.snake.positionX}`);
    //         positionSnakeAtual.classList.add('headSnake');
    //             this.matriz[this.snake.prevY][this.snake.prevX] = 3;
    //             this.matriz[this.snake.positionY][this.snake.positionX] = 1;

    //         if(tail.length >= 1){
    //             tail.forEach((element)=>{
    //                 element.classList.remove('bodySnake');
    //             })
    //         }
    //         for(let i = 1; i <= this.snake.size; i +=1){
    //             let positionBodySnake = document.getElementById(`${this.snake.positionY - i}, ${this.snake.positionX}`);
    //                 positionBodySnake.classList.add('bodySnake');
    //         }

}
