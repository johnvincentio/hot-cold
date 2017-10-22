
import {
	FETCH_SCORE_SUCCESS,
	FETCH_SCORE_ERROR,
} from '../constants/action.types';

const initialState = {
	best: 999,
};

function fetchTopScore(state = initialState, action) {
	console.log('>>> reducer; topScore; action');
	console.log(state);
	console.log(action);
	console.log('<<< reducer; topScore; action');
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

export default fetchTopScore;
