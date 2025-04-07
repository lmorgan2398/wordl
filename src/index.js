import './styles.css'
import { getRandomWord, getWordsArray } from "./words";
import { getGameboard, newGameboard, newTurn, resetTurn, writeLetter, deleteLetter, checkForCompleteWord, getTurn } from "./array";
import { updateGameDisplay, addAnswerClass, clearAnswerClasses, displayAnswer, clearAnswerDisplay, toggleNewGameButton } from './display';

let randomWord;
let randomWordArray;
let gameState;

document.addEventListener('DOMContentLoaded', () => {
    newGame();
    return;
})


document.addEventListener('keydown', (e) => {
    if(gameState === 'inactive'){
        return;
    }
    if(e.key === 'Enter' && checkForCompleteWord() === true){
        let currentRow = getGameboard()[getTurn()];
        let currentRowWord = currentRow.join('');
        if(getWordsArray().includes(currentRowWord)){
            checkForMatch(getGameboard(), getTurn());
            console.log(currentRowWord);
            console.log(randomWord);
            console.log(currentRowWord === randomWord);
            if(currentRowWord == randomWord){
                displayAnswer(randomWord);
                toggleNewGameButton();
                gameState = 'inactive';
                return;
            } else
                newTurn();
                return;
        } else {
            alert('Invalid word!');
            return;
        }
    } else if(e.key === 'Backspace'){
        deleteLetter();
        updateGameDisplay(getGameboard());
        return;
    } else if(/^[a-zA-Z]$/.test(e.key)){
        writeLetter(e.key);
        updateGameDisplay(getGameboard());
        return;
    }
});

const newGameButton = document.querySelector('.new-game');
newGameButton.addEventListener('click', () => {
    newGame();
    return;
})

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