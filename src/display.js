const gameDisplay = document.querySelectorAll('.cell');

const updateGameDisplay = function(gameboard){
    for(let i = 0; i < gameboard.length; i++){
        let gameboardRow = gameboard[i];
        for(let j = 0; j < gameboardRow.length; j++){
            gameDisplay.forEach((cell) => {
                if(cell.dataset.index === `[${i}][${j}]`){
                    if(gameboardRow[j] !== null){
                        cell.textContent = gameboardRow[j].toUpperCase();
                        return;
                    } else {
                        cell.textContent = '';
                    }
                }
            });
        }
    }
}

const addAnswerClass = function(row, column, status){
    gameDisplay.forEach((cell) => {
        if(cell.dataset.index === `[${row}][${column}]`){
            cell.classList.add(`${status}`);
            return;
        }
    })
}

const clearAnswerClasses = function(){
    gameDisplay.forEach((cell) => {
        cell.classList.remove('right');
        cell.classList.remove('close');
        cell.classList.remove('wrong');
    })
}

const answerDisplay = document.querySelector('.answer-display');
const displayAnswer = function(word){
    answerDisplay.textContent = word.toUpperCase();
    answerDisplay.style.visibility = 'visible';
}
const clearAnswerDisplay = function(){
    answerDisplay.textContent = '';
    answerDisplay.style.visibility = 'hidden';
}

const newGameButton = document.querySelector('.new-game');
const toggleNewGameButton = function(){
    if(newGameButton.style.visibility === 'hidden'){
        newGameButton.style.visibility = 'visible';
    } else {
        newGameButton.style.visibility = 'hidden';
    }
}

const shakeRow = function(turn){
    for(let i = 0; i < 4; i++){
        gameDisplay.forEach((cell) => {
            if(cell.dataset.index === `[${turn}][${i}]`){
                cell.classList.add('shake-horizontal');
                setTimeout(() => {
                    cell.classList.remove('shake-horizontal');
                }, 1000)
            }
        })
    }
}

export { updateGameDisplay, addAnswerClass, clearAnswerClasses, displayAnswer, clearAnswerDisplay, toggleNewGameButton, shakeRow }