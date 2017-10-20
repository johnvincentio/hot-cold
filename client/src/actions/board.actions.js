
import 'isomorphic-fetch';

import {
	NEW_GAME,
	USER_GUESSED_NUMBER,
	FETCH_SCORE_SUCCESS,
	FETCH_SCORE_ERROR,
} from '../constants/action.types';

export const handleNewGame = () => ({
	type: NEW_GAME,
});

export const userGuessedNumber = guess => ({
	type: USER_GUESSED_NUMBER,
	guess,
});

export const fetchScoreSuccess = score => ({
	type: FETCH_SCORE_SUCCESS,
	score,
});

export const fetchScoreError = error => ({
	type: FETCH_SCORE_ERROR,
	error,
});

export const fetchScore = () => (dispatch) => {
	const url = 'http://localhost:3001/api/score/get';
	return fetch(url)
		.then((response) => {
			if (!response.ok) {
				const error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response;
		})
		.then(response => response.json())
		.then(data => dispatch(fetchScoreSuccess(data.score)))
		.catch(error => dispatch(fetchScoreError(error)));
};

export const sendScore = score => (dispatch) => {
	console.log('sendScore; score '+score);
	const data = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ score }),
	};
	console.log(data);
	const url = 'http://localhost:3001/api/score/send';
	return fetch(url, data)
		.then((response) => {
			if (!response.ok) {
				const error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response;
		})
		.then((success) => { console.log(success); })
		.catch(error => dispatch(fetchScoreError(error)));
};

/*
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
*/
