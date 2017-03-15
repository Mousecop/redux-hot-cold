import React from 'react';
import {connect} from 'react-redux';


export function GuessHistory(props) {
  const history = props.history.map((item,index) => {
    return <span className="userGuesses" key={index}>{item}</span>;
  });
  return (
    <div className="history">
      {history}
    </div>
  )
};
const mapStateToProps = (state, props) => ({
  history: state.guesses
});
export default connect(mapStateToProps)(GuessHistory);
