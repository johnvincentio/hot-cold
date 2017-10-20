
import { combineReducers } from 'redux';

import help from './help.reducer';
import board from './board.reducer';

const rootReducer = combineReducers({
	helpReducer: help,
	boardReducer: board,
});

export default rootReducer;
