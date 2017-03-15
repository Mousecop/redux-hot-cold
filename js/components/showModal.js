import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


export function ShowModal(props) {
  return (
    <a href="#" className="new" onClick={e => {
      e.preventDefault();
      props.dispatch(actions.toggleInfoModal())}}>
      What
    </a>
  );
}
const mapStateToProps = (state, props) => ({
    modalToggle: state.showInfoModal
})

export default connect()(ShowModal);
