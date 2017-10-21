
import { combineReducers } from 'redux';

import help from './help.reducer';
import board from './board.reducer';
import topScore from './topScore.reducer';

const rootReducer = combineReducers({
	helpReducer: help,
	boardReducer: board,
	topScoreReducer: topScore,
});

export default rootReducer;
