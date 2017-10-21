
import {
	FETCH_SCORE_SUCCESS,
	FETCH_SCORE_ERROR,
} from '../constants/action.types';

const initialState = {
	best: 999,
};

function topScore(state = initialState, action) {
	console.log('(1) reducer; topScore; action');
	console.log(state);
	console.log(action);
	console.log('(2) reducer; topScore; action');
	switch (action.type) {
	case FETCH_SCORE_SUCCESS: {
		return Object.assign({}, state, {
			best: action.score,
		});
	}

	case FETCH_SCORE_ERROR: {
		return Object.assign({}, state, {
			best: 99,
		});
	}
	default: {
		return state;
	}
	}
}

export default topScore;
