import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {GuessHistory} from '../js/components/guessHistory';

describe('Guess History component', () => {
  it('should display guesses already made', () => {
    const history = [20, 40, 57, 14];

        //Check className
        const renderer = TestUtils.createRenderer();
        renderer.render(<GuessHistory history={history}/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('history');

        //Check counter props
        const guesses = result.props.children[0];
        guesses.props.className.should.equal('userGuesses');
        guesses.props.children.should.equal(20);
        guesses.type.should.equal('span');
        guesses.key.should.equal('0');

        //Check Type
       result.type.should.equal('div');
  });
});
