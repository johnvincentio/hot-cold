
import 'isomorphic-fetch';

import {
	USER_GUESSED_NUMBER,
	FETCH_SCORE_SUCCESS,
	FETCH_SCORE_ERROR,
} from '../constants/action.types';

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
	const url = 'http://localhost:8080/api/score/get';
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
