/*
Actions:

User guessed a number
New Game

Help
Dismiss Help
*/
export const USER_GUESSED_NUMBER = 'USER_GUESSED_NUMBER';
export const userGuessedNumber = guess => ({
	type: USER_GUESSED_NUMBER,
	guess,
});

export const NEW_GAME = 'NEW_GAME';
export const handleNewGame = () => ({
	type: NEW_GAME,
});

export const HELP = 'HELP';
export const handleHelp = () => ({
	type: HELP,
});

export const DISMISS_HELP = 'DISMISS_HELP';
export const handleDismissHelp = () => ({
	type: DISMISS_HELP,
});

export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (repository, description) => ({
	type: FETCH_DESCRIPTION_SUCCESS,
	repository,
	description,
});

export const FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR';
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
