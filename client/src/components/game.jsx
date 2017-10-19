import React from 'react';

/* eslint-disable import/no-named-as-default */
import Help from '../help/help';
import Navigation from '../navigation/navigation';
import Board from '../board/board';

const Game = () => (
	<div className="game">
		<Help />
		<Navigation />
		<Board />
	</div>
);

// function Game() {
// 	return (
// 		<div className="game">
// 			<Help />
// 			<Navigation />
// 			<Board />
// 		</div>
// 	);
// }

export default Game;
