import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import Game from './components/game';

const initialState = {};
const store = createStore(initialState);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>,
		document.getElementById('root'),
	);
});

/*
import * as actions from './actions/index';
import store from './store';

store.dispatch(actions.generateRandomNumber(1, 100));
console.log(store.getState());

store.dispatch(actions.userGuessedNumber(26));
console.log(store.getState());

store.dispatch(actions.userGuessedNumber(71));
console.log(store.getState());

store.dispatch(actions.userGuessedNumber(10));
console.log(store.getState());

store.dispatch(actions.userGuessedNumber(93));
console.log(store.getState());
*/
