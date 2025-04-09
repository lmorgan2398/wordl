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


function checkForMatch(gameboard, turn){
    let currentRow = gameboard[turn];
    let randomWordCloseArray = [];
    let currentRowCloseArray = [];
    for(let i = 0; i < currentRow.length; i++){
        if(randomWordArray[i] === currentRow[i]){
            addAnswerClass(turn, i, 'right');
            currentRowCloseArray.push(null);
        } else {
            randomWordCloseArray.push(randomWordArray[i]);
            currentRowCloseArray.push(currentRow[i]);
        }
    }
    for(let i = 0; i < currentRowCloseArray.length; i++){
        if(currentRowCloseArray[i] !== null){
            let closeValue = currentRowCloseArray[i];
            if(randomWordCloseArray.includes(closeValue)){
                addAnswerClass(turn, i, 'close');
                randomWordCloseArray.splice(randomWordCloseArray.findIndex((element) => element === closeValue), 1);
            } else {
                addAnswerClass(turn, i, 'wrong');
            }
        }
    }
}



const keys = document.querySelectorAll('.keyboard-container button');

keys.forEach(key => {
    key.addEventListener('click', () => {
        if(key.dataset.key === 'Enter'){
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
        } else if(key.dataset.key === 'Backspace'){
            if(gameState === 'inactive'){
                return;
            }
            deleteLetter();
            updateGameDisplay(getGameboard());
            return;
        } else if(/^[a-zA-Z]$/.test(key.dataset.key)){
            if(gameState === 'inactive'){
                return;
            }
            writeLetter(key.dataset.key);
            updateGameDisplay(getGameboard());
            return;
        }    })
})


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