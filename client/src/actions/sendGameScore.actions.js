
import 'isomorphic-fetch';

// const defaultParams = {
// 	mode: 'cors',
// 	credentials: 'include',
// 	headers: {
// 		Accept: 'application/json',
// 		'Content-Type': 'application/json; charset=utf-8',
// 	},
// };

/* eslint-disable import/prefer-default-export */
export const sendScore = score => () => {
	// console.log(`sendScore, score = ${score}`);
	const data = {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=utf-8',
		},
		method: 'POST',
		body: JSON.stringify({ score }),
	};
	// console.log(data);
	const url = '/api/score/send';
	return fetch(url, data)
		.then((response) => {
			if (!response.ok) {
				const error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response;
		})
		/* eslint-disable no-console */
		.then((success) => { console.log(success); })
		.catch(error => console.log(error));
};
