import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/';

// eslint-disable-next-line import/no-named-as-default
import GuessForm from './GuessForm';
import GuessList from './GuessList';

export class Board extends React.Component {
	constructor(props) {
		super(props);
		console.log('>>> Board; constructor');
		console.log(props);
		console.log('<<< Board; constructor');
		this.handleUserInput = this.checkUserInput.bind(this);
	}

	componentDidMount() {
		this.props.actions.handleNewGame();
		this.props.actions.fetchScore();
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('>>> Board; componentWillUpdate');
		console.log(nextProps);
		console.log(nextState);
		console.log('<<< Board; componentWillUpdate');
		// if (nextState.open == true && this.state.open == false) {
		// 	this.props.onWillOpen();
		// }
	}

	checkUserInput(input) {
		console.log(`(checkUserInput) input ${input}`);
		this.props.actions.userGuessedNumber(input);
		if (input === this.props.random) {
			this.props.actions.sendScore(this.props.guess + 1);
		}
	}

	render() {
		const form = this.props.completed ? '' : <GuessForm onUserInput={this.handleUserInput} />;
		return (
			<section className="board">
				<div>
					<h1>Hot or Cold</h1>
				</div>
				<div className="comment">{this.props.comment}</div>
				{form}
				<div className="guess">
					Guess #<span>{this.props.guess}</span>
				</div>
				<GuessList />
				<div className="random">Random #{this.props.random}</div>
				<div className="world-record">World record is #{this.props.best} guesses.</div>
			</section>
		);
	}
}

Board.propTypes = {
	comment: PropTypes.string.isRequired,
	guess: PropTypes.number.isRequired,
	random: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	best: PropTypes.number.isRequired,
	actions: PropTypes.shape({
		handleNewGame: PropTypes.func.isRequired,
		fetchScore: PropTypes.func.isRequired,
		userGuessedNumber: PropTypes.func.isRequired,
		sendScore: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	comment: state.boardReducer.comment,
	guess: state.boardReducer.guessed.length,
	random: state.boardReducer.random,
	completed: state.boardReducer.completed,
	best: state.fetchTopScoreReducer.best,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
