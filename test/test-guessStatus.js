import {GuessStatus} from '../js/components/guessStatus';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

describe('Guess Status component', () => {
  it('should display status of user guess', () => {
    const feedback= 'You are steamy';

        //Check className
        const renderer = TestUtils.createRenderer();
        renderer.render(<GuessStatus status={feedback}/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('status');

        //Check status props
        const status = result.props.children;
        status.props.children.should.equal('You are steamy');
        status.type.should.equal('p');

        //Check Type
       result.type.should.equal('div');
  });
});
