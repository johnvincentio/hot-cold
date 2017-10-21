
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

/*
	if (!Number.isNaN(action.input)) {
		const guess = parseInt(action.input, 10);
		const comment = Utils.handleComment(state.random, action.guess);
		const completed = state.random === guess;
		if (guess > 0 && guess < 101) {
			return Object.assign({}, state, {
				guessed: [...state.guessed, guess],
				comment,
				completed,
			});
		}
*/
/*
		if (!Number.isNaN(input)) {
			const guess = parseInt(input, 10);
			this.props.actions.userGuessedNumber(guess);
			this.guessInput.value = '';
			if (guess === this.props.random) {
				this.props.actions.sendScore(this.props.guessed.length + 1);
			}
		}
	
		this.props.actions.sendScore(this.props.guessed.length + 1);
*/
function board(state = initialState, action) {
	console.log('(1) reducer; board; action');
	console.log(action);
	console.log(state);
	console.log('(2) reducer; board; action');
	switch (action.type) {
	case USER_GUESSED_NUMBER: {
		if (!Number.isNaN(action.input)) {
			const guess = parseInt(action.input, 10);
			const comment = Utils.handleComment(state.random, action.guess);
			const completed = state.random === guess;
			if (guess > 0 && guess < 101) {
				return Object.assign({}, state, {
					guessed: [...state.guessed, guess],
					comment,
					completed,
				});
			}
			return Object.assign({}, state, {
				comment,
			});
		}
		return state;
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
