
import { combineReducers } from 'redux';

import help from './help.reducer';
import board from './board.reducer';
import fetchTopScore from './fetchTopScore.reducer';

const rootReducer = combineReducers({
	helpReducer: help,
	boardReducer: board,
	fetchTopScoreReducer: fetchTopScore,
});

export default rootReducer;
