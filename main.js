let snake;
let game;
let input = document.getElementById('input').onchange = function() {capitalLetterStartGame()};
let startGame = document.getElementById('start').onclick = function() {startSnake()};
let retry = document.getElementById('retry').onclick = function(){playAgain()};
let newPlay = document.getElementById('newPlay').onclick = function(){newPlayer()}
let player;
let pontuations = [{
    player: "Afonso",
    biggerPontuation: 3,
},{
    player: "IA",
    biggerPontuation: 15,
}];

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
    player = document.getElementById('input').value;
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
    createScore();
}
function createScore(){
    let parentScore = document.querySelector('#score>ol');
    let list = document.createElement('li');
        list.setAttribute('class','score');
        list.innerHTML = '0';
    parentScore.appendChild(list);
}
function checkLi(){
    let quantity = document.querySelectorAll('.score');
    if(quantity.length == 25){
        quantity[0].remove();
    }
}
function updateScore(){
    let li = document.querySelector('#score>ol').lastElementChild;
        li.innerText = `${snake.pontuation}`;  
}
function playAgain(){
    let screenGameOver = document.getElementById('gameOver');
        screenGameOver.style.display = 'none';
        screenGameOver.style.visibility = 'hidden';
        checkLi();
    return startSnake();
}
function removeScore(){
    let quantity = document.querySelectorAll('.score');
        quantity.forEach((Element)=>{
            Element.remove()
        })
}
function newPlayer(){
    removeScore();
    let screenGameOver = document.getElementById('gameOver');
        screenGameOver.style.display = 'none';
        screenGameOver.style.visibility = 'hidden';
    let initial = document.getElementById('initial');
        initial.style.display = 'grid';
        initial.style.visibility = 'visible';    
}
// function createRanking(){
//         updateRanking();
//         let parentRanking = document.querySelector('#ranking>ol');
//         pontuations.forEach((players)=>{
//             let list = document.createElement('li');
//             list.setAttribute('id', `${player}`);
//             list.innerHTML = `${players.player}: ${players.biggerPontuation}`;
//             parentRanking.appendChild(list);
//         })
// }
// function updatePontuations(){
//         pontuations.forEach((element)=>{
//             if(element.player === player){
//                 if(element.biggerPontuation < snake.pontuation){
//                     element.biggerPontuation = snake.pontuation;
//                 }
//             }else{
//                 let newPlayer = {player: `${player}`,pontuation: snake.pontuation};
//                 pontuations.push(newPlayer);
//             }
//         });
//         createRanking();
// }
// function updateRanking(){
//     pontuations.sort((a,b)=>{
//         return b.biggerPontuation - a.biggerPontuation;
//     })
// }