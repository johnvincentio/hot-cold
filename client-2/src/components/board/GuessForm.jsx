import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/';

export class GuessForm extends React.Component {
	constructor(props) {
		super(props);
		this.checkUserInput = this.props.onUserInput.bind(this);
		this.handleKeyPress = this.verifyKeyPress.bind(this);
	}

	verifyKeyPress(event) {
		if (event.keyCode === 13 || event.which === 13) {
			const input = this.guessInput.value;
			// eslint-disable-next-line no-restricted-globals
			if (!isNaN(input)) {
				const verify = parseInt(input, 10);
				this.checkUserInput(verify);
			}
			this.guessInput.value = '';
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
	onUserInput: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(GuessForm);
