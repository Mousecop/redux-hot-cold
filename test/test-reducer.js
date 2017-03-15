import reducer from '../js/reducers/index';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import store from '../js/store';

const should = chai.should();
describe('Game Reducer', () => {
  it('should return inital state', () => {
    const number = store.getState().correctAnswer
    console.log(number)
    reducer(undefined, {}).should.equal({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: number,
      showInfoModal: false})
  })
})
