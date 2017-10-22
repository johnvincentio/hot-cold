
import {
	USER_GUESSED_NUMBER,
	NEW_GAME,
} from '../constants/action.types';

import Utils from '../utils';

// eslint-disable-next-line no-mixed-operators
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const initialState = {
	guessed: [],
	comment: 'Make your Guess!',
	random: 0,
	completed: false,
};

function board(state = initialState, action) {
	console.log('>>> reducer; board; action');
	console.log(action);
	console.log(state);
	console.log('<<< reducer; board; action');
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
		return Object.assign({}, state, {
			comment,
		});
	}
	case NEW_GAME: {
		return Object.assign({}, initialState, {
			random: randomInteger(1, 100),
		});
	}

	default: {
		return state;
	}
	}
}

export default board;
