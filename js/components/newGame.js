import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export function NewGame(props) {
  return (
    <a href="#" className="new" onClick={e => {
      e.preventDefault();
      props.dispatch(actions.newGame())}}>
      New Game
    </a>
  );
}

export default connect()(NewGame);
