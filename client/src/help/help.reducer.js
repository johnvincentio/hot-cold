
import {
	HELP,
	DISMISS_HELP,
} from '../constants/action.types';

const initialState = {
	help: false,
};

function help(state = initialState, action) {
	switch (action.type) {
	case HELP: {
		return { help: true };
	}
	case DISMISS_HELP: {
		return { help: false };
	}
	default:
		return state;
	}
}

export default help;

/*
export default (state = false, action) => {
	switch (action.type) {
	case HELP: {
		return true;
	}
	case DISMISS_HELP: {
		return false;
	}
	default:
		return state;
	}
};
*/

/*
export default (state = {}, action) => {
	switch (action.type) {
	case HELP: {
		return Object.assign({}, state, {
			help: true,
		});
	}
	case DISMISS_HELP: {
		return Object.assign({}, state, {
			help: false,
		});
	}
	default:
		return state;
	}
};
*/
