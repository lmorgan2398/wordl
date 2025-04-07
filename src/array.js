function initializeGameboard(){
    return new Array(6).fill(null).map(() => new Array(4).fill(null));
}

let gameboard = initializeGameboard();

const getGameboard = () => gameboard;

const newGameboard = () => gameboard = initializeGameboard();

const writeLetter = function(currentTurn, inputLetter){
    let currentRow = gameboard[currentTurn];
    for(let i = 0; i < currentRow.length; i++){
        if(currentRow[i] === null){
            currentRow[i] = inputLetter;
            return;
        }
    }
}

export { getGameboard, newGameboard, writeLetter }