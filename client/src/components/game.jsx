import React from 'react';

/* eslint-disable import/no-named-as-default */
import Help from './Help';
import Navigation from './Navigation';
import Board from './board/Board';

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
