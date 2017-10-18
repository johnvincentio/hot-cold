
import {
	HELP,
	DISMISS_HELP,
} from '../constants/action.types';

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
