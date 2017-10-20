import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/';

// eslint-disable-next-line import/no-named-as-default
import GuessForm from './guess-form';
import GuessList from './guess-list';

export class Board extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	componentDidMount() {
		// this.props.dispatch(actions.fetchScore());
		this.props.actions.handleNewGame();
		this.props.actions.fetchScore();
	}

	render() {
		const form = this.props.completed ? '' : <GuessForm />;
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
	}).isRequired,
};

const mapStateToProps = state => ({
	comment: state.boardReducer.comment,
	guess: state.boardReducer.guessed.length,
	random: state.boardReducer.random,
	completed: state.boardReducer.completed,
	best: state.boardReducer.best,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
