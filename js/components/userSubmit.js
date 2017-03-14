import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


export function UserSubmit(props) {
    let userInput;
  return (
    <form className="user-submit" onSubmit={e => {
            e.preventDefault();
            props.dispatch(actions.makeGuess(userInput.value))}}>
        <input ref={ref => userInput=ref} type="text" placeholder="Enter Your Guess" maxLength="3" required />
        <input type="submit" value="user"/>
    </form>
  );

}

export default connect()(UserSubmit);
