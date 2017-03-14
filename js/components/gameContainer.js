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

import PlayContainer from './playContainer';

export default function Game(props) {
  return (
    <div className="gameContainer">
      <h1 className="header">Hot or Cold</h1>
      <PlayContainer />
    </div>
  );
}
