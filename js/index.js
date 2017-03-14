require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/gameContainer';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Game />, document.getElementById('root'))
);
