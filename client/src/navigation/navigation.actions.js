import {
	HELP,
	NEW_GAME,
} from '../constants/action.types';

export const handleHelp = () => ({
	type: HELP,
});

export const handleNewGame = () => ({
	type: NEW_GAME,
});
