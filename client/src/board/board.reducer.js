import {
	USER_GUESSED_NUMBER,
	NEW_GAME,
	FETCH_SCORE_SUCCESS,
	FETCH_SCORE_ERROR,
} from '../constants/action.types';

import Utils from '../utils';

// eslint-disable-next-line no-mixed-operators
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const initialState = {
	guessed: [],
	comment: 'Make your Guess!',
	random: randomInteger(1, 100),
	completed: false,
	best: 999,
};

function board(state = initialState, action) {
	switch (action.type) {
	case USER_GUESSED_NUMBER: {
		const comment = Utils.handleComment(state.random, action.guess);
		const completed = state.random === action.guess;
		if (action.guess > 0 && action.guess < 101) {
			return Object.assign({}, state, {
				guessed: [...state.guessed, action.guess],
				comment,
				completed,
			});
		}
		return Object.assign({}, state, { guessed: state.guessed, comment, completed });
	}

	case NEW_GAME: {
		return Object.assign({}, state, {
			guessed: [],
			comment: 'Make your Guess!',
			random: randomInteger(1, 100),
			completed: false,
		});
	}

	case FETCH_SCORE_SUCCESS: {
		console.log('>>> FETCH_SCORE_SUCCESS');
		console.log(state);
		console.log('(1) FETCH_SCORE_SUCCESS');
		console.log(action);
		console.log('(2) FETCH_SCORE_SUCCESS');
		// Find the index of the matching repository

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

export default board;
