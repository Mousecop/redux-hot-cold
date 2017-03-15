import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import {GuessCount} from '../js/components/guessCount';

describe('Guess Count component', () => {
  it('should display number of guesses', () => {
    const count = 3;


        //Check className
        const renderer = TestUtils.createRenderer();
        renderer.render(<GuessCount count={count}/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('guessCount');

        //Check counter props
        const counter = result.props.children;
        counter.props.children[1].should.equal(3);
        counter.props.children[0].should.equal('Guess #');
        counter.type.should.equal('p');

        //Check Type
       result.type.should.equal('div');
  });
});
