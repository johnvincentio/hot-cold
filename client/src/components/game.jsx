import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/';

/* eslint-disable import/no-named-as-default */
import Help from './Help';
import Navigation from './Navigation';
import Board from './board/Board';

export class Game extends React.Component {
	constructor(props) {
		super(props);
		// console.log('>>> Game; constructor');
		// console.log(props);
		// console.log('<<< Game; constructor');
		this.handleNewGame = this.onNewGame.bind(this);
	}

	onNewGame() {
		this.props.actions.handleNewGame();
		this.props.actions.fetchScore();
	}

	render() {
		return (
			<div className="game">
				<Help />
				<Navigation onNewGame={this.handleNewGame} />
				<Board onNewGame={this.handleNewGame} />
			</div>
		);
	}
}

Game.propTypes = {
	actions: PropTypes.shape({
		handleNewGame: PropTypes.func.isRequired,
		fetchScore: PropTypes.func.isRequired,
	}).isRequired,
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(Game);


// const Game = () => (
// 	<div className="game">
// 		<Help />
// 		<Navigation onNewGame={this.handleUserInput}/>
// 		<Board onNewGame={this.handleUserInput}/>
// 	</div>
// );

// function Game() {
// 	return (
// 		<div className="game">
// 			<Help />
// 			<Navigation />
// 			<Board />
// 		</div>
// 	);
// }
