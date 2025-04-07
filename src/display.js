const gameDisplay = document.querySelectorAll('.cell');

const updateGameDisplay = function(gameboard){
    for(let i = 0; i < gameboard.length; i++){
        console.log('row');
        let gameboardRow = gameboard[i];
        for(let j = 0; j < gameboardRow.length; j++){
            console.log('column');
            gameDisplay.forEach((cell) => {
                console.log(cell.dataset.index);
                if(cell.dataset.index === `[${i}][${j}]`){
                    cell.textContent = gameboardRow[j];
                    return;
                }
            });
        }
    }
}

export { updateGameDisplay }