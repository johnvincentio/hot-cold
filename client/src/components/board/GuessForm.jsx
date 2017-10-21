import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/';

export class GuessForm extends React.Component {
	constructor(props) {
		super(props);
		console.log('(1) GuessForm; props');
		console.log(props);
		console.log('(2) GuessForm; props');
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleKeyPress(event) {
		if (event.keyCode === 13 || event.which === 13) {
			// const input = this.guessInput.value;
			this.props.actions.userGuessedNumber(this.guessInput.value);
			this.guessInput.value = '';
			// this.handleGuess();
		}
	}

	render() {
		return (
			<div className="guess-form">
				<input
					type="text"
					className="guess-text"
					ref={(input) => {
						this.guessInput = input;
					}}
					required
					onKeyPress={this.handleKeyPress}
					placeholder="Enter your Guess"
					maxLength="3"
				/>
			</div>
		);
	}
}

GuessForm.propTypes = {
//	random: PropTypes.number.isRequired,
//	guessed: PropTypes.arrayOf(PropTypes.number).isRequired,
	actions: PropTypes.shape({
		userGuessedNumber: PropTypes.func.isRequired,
		sendScore: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = state => ({
	random: state.boardReducer.random,
	guessed: state.boardReducer.guessed,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GuessForm);


	// handleGuess() {
	// 	const input = this.guessInput.value;
	// 	this.props.actions.userGuessedNumber(input);
	// 	this.guessInput.value = '';
	// 	if (!Number.isNaN(input)) {
	// 		const guess = parseInt(input, 10);
	// 		this.props.actions.userGuessedNumber(guess);
	// 		this.guessInput.value = '';
	// 		if (guess === this.props.random) {
	// 			this.props.actions.sendScore(this.props.guessed.length + 1);
	// 		}
	// 	}
	// }
