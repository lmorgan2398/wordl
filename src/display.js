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

const keys = document.querySelectorAll('.keyboard-container button');
const highlightKeyboard = function(){
    gameDisplay.forEach((cell) => {
        let cellKey = cell.textContent.toLowerCase();
        let cellAnswer;
        if(cell.classList.contains('right')){
            cellAnswer = 'right';
        } else if(cell.classList.contains('close')){
            cellAnswer = 'close';
        } else{
            cellAnswer = 'wrong';
        }
        keys.forEach((key) => {
            if(key.dataset.key === cellKey){
                if(cellAnswer === 'right'){
                    while(key.classList.contains('close')){
                        key.classList.remove('close')
                    };
                    while(key.classList.contains('wrong')){
                        key.classList.remove('wrong');
                    };
                    while(!key.classList.contains('right')){
                    key.classList.add('right');
                    };
                } else if(cellAnswer === 'close'){
                    while(key.classList.contains('wrong')){
                        key.classList.remove('wrong');
                    }
                    while((!key.classList.contains('close')) && (!key.classList.contains('right'))){
                        key.classList.add('close');
                    }
                } else if(cellAnswer === 'wrong'){
                    while((!key.classList.contains('wrong')) && (!key.classList.contains('close')) && (!key.classList.contains('right'))){
                        key.classList.add('wrong');
                    }
                }
            };
        })
    })
}

const resetKeyboard = function(){
    keys.forEach((key) => {
        while(key.classList.contains('right')){
            key.classList.remove('right');
        };
        while(key.classList.contains('close')){
            key.classList.remove('close');
        };
        while(key.classList.contains('wrong')){
            key.classList.remove('wrong');
        };
    })
}

export { updateGameDisplay, addAnswerClass, clearAnswerClasses, displayAnswer, clearAnswerDisplay, toggleNewGameButton, shakeRow, highlightKeyboard, resetKeyboard }