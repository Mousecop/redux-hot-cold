import React from 'react';

import GuessCount from './guessCount';
import Button from './button';
import GuessHistory from './guessHistory';
import GuessInput from './guessInput';
import GuessStatus from './guessStatus';


export default function PlayContainer(props) {
  return (
    <div className="playContainer">
      <GuessStatus />
      <GuessInput />
      <Button />
      <GuessCount />
      <GuessHistory />
    </div>
  );
}
