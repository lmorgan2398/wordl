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

export { updateGameDisplay, addAnswerClass, clearAnswerClasses }