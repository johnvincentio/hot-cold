
import {
	HELP,
	DISMISS_HELP,
} from '../constants/action.types';

export const handleHelp = () => ({
	type: HELP,
});

export const handleDismissHelp = () => ({
	type: DISMISS_HELP,
});
