import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../board/board.actions';

// eslint-disable-next-line import/no-named-as-default
import GuessForm from './guess-form';
import GuessList from './guess-list';

function Board(props) {
	const form = props.completed ? '' : <GuessForm />;
	return (
		<section className="board">
			<div>
				<h1>Hot or Cold</h1>
			</div>
			<div className="comment">{props.comment}</div>
			{form}
			<div className="guess">
				Guess #<span>{props.guess}</span>
			</div>
			<GuessList />
			<div className="random">Random #{props.random}</div>
			<div className="world-record">World record is #{props.best} guesses.</div>
		</section>
	);
}

Board.propTypes = {
	comment: PropTypes.string.isRequired,
	guess: PropTypes.number.isRequired,
	random: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	best: PropTypes.number.isRequired,
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
