import './styles.css'
import { getRandomWord, getWordsArray } from "./words";
import { getGameboard, newGameboard, newTurn, resetTurn, writeLetter, deleteLetter, checkForCompleteWord, getTurn } from "./array";
import { updateGameDisplay, addAnswerClass } from './display';

newGameboard();
let randomWord = getRandomWord();
let randomWordArray = randomWord.split('');
console.log(randomWordArray);

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter' && checkForCompleteWord() === true){
        let currentRow = getGameboard()[getTurn()];
        let currentRowWord = currentRow.join('');
        console.log(currentRowWord);
        console.log(getWordsArray().includes(currentRowWord));
        if(getWordsArray().includes(currentRowWord)){
            checkForMatch(getGameboard(), getTurn());
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

const checkForMatch = function(gameboard, turn){
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