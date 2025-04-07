let gameboard;
const getGameboard = () => gameboard;
const newGameboard = () => gameboard = new Array(6).fill(null).map(() => new Array(4).fill(null));

let currentTurn = 0;
const getTurn = () => currentTurn;
const newTurn = () => currentTurn++;
const resetTurn = () => currentTurn = 0;


const writeLetter = function(inputLetter){
    let currentRow = gameboard[currentTurn];
    for(let i = 0; i < currentRow.length; i++){
        if(currentRow[i] === null){
            currentRow[i] = inputLetter;
            return;
        }
    }
}


const deleteLetter = function(){
    let currentRow = gameboard[currentTurn];
    for(let i = currentRow.length - 1; i >= 0; i--){
        if(currentRow[i] !== null){
            currentRow[i] = null;
            return;
        }
    }
}


const checkForCompleteWord = function(){
    let currentRow = gameboard[currentTurn];
    if(!currentRow.includes(null)){
        return true;
    } else {
        return false;
    }
}

export { getGameboard, newGameboard, getTurn, newTurn, resetTurn, writeLetter, deleteLetter, checkForCompleteWord }