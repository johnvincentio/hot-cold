
import {
	NEW_GAME,
	USER_GUESSED_NUMBER,
} from '../constants/action.types';

export const handleNewGame = () => ({
	type: NEW_GAME,
});

export const userGuessedNumber = guess => ({
	type: USER_GUESSED_NUMBER,
	guess,
});
