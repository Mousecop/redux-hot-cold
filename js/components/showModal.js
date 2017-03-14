import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export function ShowModal(props) {

    if ()

  return (
    <a href="#" className="new" onClick={e => {
      e.preventDefault();
      props.dispatch(actions.toggleInfoModal()); console.log(store.getState())}}>
      What
    </a>
  );
}
const mapStateToProps = (state, props) => ({
    modalToggle: state.shoInfoModal
})

export default connect()(ShowModal);
