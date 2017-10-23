
import 'isomorphic-fetch';

import {
	FETCH_SCORE_SUCCESS,
	FETCH_SCORE_ERROR,
} from '../constants/action.types';

export const fetchScoreSuccess = score => ({
	type: FETCH_SCORE_SUCCESS,
	score,
});

export const fetchScoreError = error => ({
	type: FETCH_SCORE_ERROR,
	error,
});

export const fetchScore = () => (dispatch) => {
	const url = '/api/score/get';
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
