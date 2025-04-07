import { getRandomWord } from "./words";
import { getGameboard, newGameboard, newTurn, resetTurn, writeLetter, deleteLetter, checkForCompleteWord } from "./array";

newGameboard();
writeLetter('a');
writeLetter('b');
writeLetter('c');
deleteLetter();
deleteLetter();
writeLetter('b');
console.log(checkForCompleteWord());
writeLetter('c');
writeLetter('d');
console.log(checkForCompleteWord());
console.log(getGameboard());
newTurn();
writeLetter('e');
console.log(getGameboard());