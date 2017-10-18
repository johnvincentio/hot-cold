
import {
	USER_GUESSED_NUMBER,
	NEW_GAME,
	FETCH_DESCRIPTION_SUCCESS,
	FETCH_DESCRIPTION_ERROR,
} from '../constants/action.types';

export const userGuessedNumber = guess => ({
	type: USER_GUESSED_NUMBER,
	guess,
});

export const handleNewGame = () => ({
	type: NEW_GAME,
});

export const fetchDescriptionSuccess = (repository, description) => ({
	type: FETCH_DESCRIPTION_SUCCESS,
	repository,
	description,
});

export const fetchDescriptionError = (repository, error) => ({
	type: FETCH_DESCRIPTION_ERROR,
	repository,
	error,
});

export const fetchDescription = repository => (dispatch) => {
	const url = `https://api.github.com/repos/${repository}`;
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
		.then(data => dispatch(fetchDescriptionSuccess(repository, data.description)))
		.catch(error => dispatch(fetchDescriptionError(repository, error)));
};
