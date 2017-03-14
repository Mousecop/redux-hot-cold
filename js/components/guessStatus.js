import React from 'react';
import {connect} from 'react-redux';


export function GuessStatus(props) {
  return (
    <div className="status">
      <p>{props.status}</p>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  status: state.feedback
});
export default connect(mapStateToProps)(GuessStatus);
