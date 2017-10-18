
import { combineReducers } from 'redux';

import help from './help/help.reducer';
import board from './board/board.reducer';

const rootReducer = combineReducers({
	helpReducer: help,
	boardReducer: board,
});

export default rootReducer;
