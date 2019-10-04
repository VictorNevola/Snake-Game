let snake = new Snake(10,5);
let game = new Game(snake);

function moveSnake (keyPress){
    switch (keyPress.key){
        case 'w':
            snake.moveUp();
            break;
        case 's':
            snake.moveDown();
            break;
        case 'a':
            snake.moveLeft();
            break;
        case 'd':
            snake.moveRight();
            break;
    }
    game.updateMatriz();
}

document.addEventListener('keypress', moveSnake);

