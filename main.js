let snake = new Snake(10,5);
let game = new Game(snake);
let input = document.getElementById('input').onchange = function() {capitalLetterStartGame()};
let button = document.getElementById('start').onclick = function() {startSnake()};   

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
function capitalLetterStartGame () {
    let name = document.getElementById('input');
    let button = document.getElementById('start');
    name.value = name.value.toUpperCase();
    name.value = name.value.trim();
    if(name.value.length >= 1){
        if(!button.classList.contains('buttonStartGame')){
            button.classList.toggle("buttonStartGame");
            button.disabled = false;
        }
    }else{
        button.classList.remove("buttonStartGame");
        button.disabled = true;
    }
}
function startSnake(){
    let parentInitial = document.getElementById('matriz');
        parentInitial.style.backgroundColor ='rgba(245, 245, 245, 0.534)';
    let initial = document.getElementById('initial');
    parentInitial.removeChild(initial);
        game.randonApple();
        game.createBodySnake();
        game.createMatriz();
        game.startGame();
        document.addEventListener('keypress', moveSnake);
}

 

