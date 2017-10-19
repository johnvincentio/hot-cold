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
	best: 51,
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
		// Find the index of the matching repository
		const idx = state.findIndex(repository => repository.name === action.repository);

		if (idx === -1) {
			throw new Error('Could not find repository');
		}

		const bef = state.slice(0, idx);
		const aft = state.slice(idx + 1);
		const repo1 = Object.assign({}, state[idx], {
			description: action.description,
		});
		return [...bef, repo1, ...aft];
	}

	case FETCH_SCORE_ERROR: {
		// Find the index of the matching repository
		const index = state.findIndex(repository => repository.name === action.repository);

		if (index === -1) {
			throw new Error('Could not find repository');
		}

		const before = state.slice(0, index);
		const after = state.slice(index + 1);
		const newRepository = Object.assign({}, state[index], { description: 'N/A' });
		return [...before, newRepository, ...after];
	}

	default: {
		return state;
	}
	}
}

export default board;
