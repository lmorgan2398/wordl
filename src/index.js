import './styles.css'
import { getRandomWord, getWordsArray } from "./words";
import { getGameboard, newGameboard, newTurn, resetTurn, writeLetter, deleteLetter, checkForCompleteWord, getTurn } from "./array";
import { updateGameDisplay, addAnswerClass, clearAnswerClasses, displayAnswer, clearAnswerDisplay, toggleNewGameButton, shakeRow } from './display';

let randomWord;
let randomWordArray;
let gameState;

document.addEventListener('DOMContentLoaded', () => {
    newGame();
    return;
})


document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        if(gameState === 'active' && checkForCompleteWord() === true){
            let currentRow = getGameboard()[getTurn()];
            let currentRowWord = currentRow.join('');
            if(getWordsArray().includes(currentRowWord)){
                checkForMatch(getGameboard(), getTurn());
                if(currentRowWord == randomWord){
                    shakeRow(getTurn());
                    displayAnswer(randomWord);
                    toggleNewGameButton();
                    gameState = 'inactive';
                    return;
                } else if(getTurn() === 5){
                    displayAnswer(randomWord);
                    toggleNewGameButton();
                    gameState = 'inactive';
                } else {
                    newTurn();
                    return;
                };
            } else {
                shakeRow(getTurn());
                return;
            }
        } else if(gameState === 'inactive') {
            newGame();
            return;
        }
    } else if(e.key === 'Backspace'){
        if(gameState === 'inactive'){
            return;
        }
        deleteLetter();
        updateGameDisplay(getGameboard());
        return;
    } else if(/^[a-zA-Z]$/.test(e.key)){
        if(gameState === 'inactive'){
            return;
        }
        writeLetter(e.key);
        updateGameDisplay(getGameboard());
        return;
    }
});

// const newGameButton = document.querySelector('.new-game');
// newGameButton.addEventListener('click', () => {
//     newGame();
//     return;
// })

function checkForMatch(gameboard, turn){
    let currentRow = gameboard[turn];
    for(let i = 0; i < currentRow.length; i++){
        if(randomWordArray[i] === currentRow[i]){
            addAnswerClass(turn, i, 'right');
        } else if (randomWordArray.includes(currentRow[i])){
            addAnswerClass(turn, i, 'close');
        } else {
            addAnswerClass(turn, i, 'wrong');
        }
    }
}

function newGame(){
    toggleNewGameButton();
    resetTurn();
    clearAnswerDisplay();
    newGameboard();
    clearAnswerClasses();
    updateGameDisplay(getGameboard());
    randomWord = getRandomWord();
    randomWordArray = randomWord.split('');
    gameState = 'active';
}