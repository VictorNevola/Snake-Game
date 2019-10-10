let snake;
let game;
let twoScore = false;
let input = document.getElementById('input').onchange = function() {capitalLetterStartGame()};
let startGame = document.getElementById('start').onclick = function() {startSnake()};
let retry = document.getElementById('retry').onclick = function(){playAgain()};
let newPlay = document.getElementById('newPlay').onclick = function(){newPlayer()};

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
    snake = new Snake(10,5);
    game = new Game(snake);
    let parentInitial = document.getElementById('matriz');
        parentInitial.style.backgroundColor ='rgba(245, 245, 245, 0.534)';
    let initial = document.getElementById('initial');
    if(initial){
        initial.style.display = 'none';
        initial.style.visibility = 'hidden';
    }
    game.randonApple();
    game.createBodySnake();
    game.createMatriz();
    game.startGame();
    document.addEventListener('keypress', moveSnake);
    createScore()
}
function createScore(){
    let parentScore = document.querySelector('#score>ol');
    let list = document.createElement('li');
        list.innerHTML = '0';
    parentScore.appendChild(list);
}
function updateScore(){
            let li = document.querySelector('#score>ol').lastElementChild;
                li.innerText = `${snake.pontuation}`;
}
function playAgain(){
    let screenGameOver = document.getElementById('gameOver');
        screenGameOver.style.display = 'none';
        screenGameOver.style.visibility = 'hidden';
        twoScore = true;
    return startSnake();
}
function newPlayer(){

}