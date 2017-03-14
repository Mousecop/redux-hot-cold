import React from 'react';
import {connect} from 'react-redux';


export function GuessCount(props) {
  return (
    <div className="guessCount">
      <p>Guess #{props.count}</p>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  count: state.guesses.length
});
export default connect(mapStateToProps)(GuessCount);
