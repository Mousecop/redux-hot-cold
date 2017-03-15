import reducer from '../js/reducers/index';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import store from '../js/store';

const should = chai.should();

describe('Game Reducer', () => {
    it('should return inital state', () => {

        const result = reducer(undefined, {});
        console.log(result.guesses);
        result.guesses.should.eql([]);
        result.feedback.should.equal('Make your guess!');
        result.correctAnswer.should.be.within(1, 100);
        result.showInfoModal.should.equal(false)
        })

    it('should handle NEW_GAME', () => {
        const result = reducer(undefined, {
            type: 'NEW_GAME',
            correctAnswer: 30
        })
        result.guesses.should.eql([]);
        result.feedback.should.equal('Make your guess!');
        result.correctAnswer.should.equal(30);
        result.showInfoModal.should.equal(false);
    })

    it('should handle MAKE_GUESS', () => {
        const result = reducer(undefined, {
            type: 'MAKE_GUESS',
            
        })
        result.guesses.should.eql([]);
        result.feedback.should.equal('Please enter a valid number');
        result.correctAnswer.should.be.within(1, 100);
        result.showInfoModal.should.equal(false);
    })

    it('should handle TOGGLE_INFO_MODAL', () => {
        const result = reducer(undefined, {
            type: 'TOGGLE_INFO_MODAL',
        })
    result.guesses.should.eql([]);
    result.feedback.should.equal('Make your guess!');
    result.correctAnswer.should.be.within(1, 100);
    result.showInfoModal.should.equal(true);
    })

})
