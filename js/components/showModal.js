import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export function ShowModal(props) {
  return (
    <a href="#" className="new" onClick={e => {
      e.preventDefault();
      props.dispatch(actions.toggleInfoModal()); console.log(store.getState())}}>
      What
    </a>
  );
}

export default connect()(ShowModal);
