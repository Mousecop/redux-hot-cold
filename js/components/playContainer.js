import React from 'react';

import GuessCount from './guessCount';
import UserSubmit from './userSubmit';
import GuessHistory from './guessHistory';
import GuessStatus from './guessStatus';


export default function PlayContainer(props) {
  return (
    <div className="playContainer">
      <GuessStatus />
      <UserSubmit />
      <GuessCount />
      <GuessHistory />
    </div>
  );
}
