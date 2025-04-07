const gameDisplay = document.querySelectorAll('.cell');

const updateGameDisplay = function(gameboard){
    for(let i = 0; i < gameboard.length; i++){
        let gameboardRow = gameboard[i];
        for(let j = 0; j < gameboardRow.length; j++){
            gameDisplay.forEach((cell) => {
                if(cell.dataset.index === `[${i}][${j}]`){
                    cell.textContent = gameboardRow[j];
                    return;
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

export { updateGameDisplay, addAnswerClass }