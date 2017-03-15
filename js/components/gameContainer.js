/*
//list of components
  input component
  new game component
  status component
  guess button component
  guess count component
  guess history component
  info component
  play container component
*/

import React from 'react';
import {connect} from 'react-redux';
import PlayContainer from './playContainer';
import NewGame from './newGame';
import ShowModal from './showModal';
import * as actions from '../actions/index';
import Modal from './modal';

export function Game(props) {
    let toggle = 'none';
    if (props.modalToggle) {
        toggle = 'block';
    }
  return (
    <div className="gameContainer">
      <h1 className="header">Hot or Cold</h1>
      <NewGame />
      <ShowModal />
      <PlayContainer />
      <div id="sm" style={{display: toggle}}>
          <Modal />
          <button onClick={() => {props.dispatch(actions.toggleInfoModal())}}>Got it!</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state, props) => ({
    modalToggle: state.showInfoModal
});
export default connect(mapStateToProps)(Game);
