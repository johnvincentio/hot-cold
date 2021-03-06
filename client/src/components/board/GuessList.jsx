import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GuessItem from './GuessItem';

function GuessList(props) {
	const alreadyGuessed = props.guessed.map(item => <GuessItem guess={item} key={item} />);
	return <div className="guessed-list">{alreadyGuessed}</div>;
}

GuessList.propTypes = {
	guessed: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
	guessed: state.boardReducer.guessed,
});

export default connect(mapStateToProps)(GuessList);
