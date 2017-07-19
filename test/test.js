'use strict';

var expect = require('chai').expect;

const stack_test = require('./stack_test')
const bubblesort_test = require('./bubblesort_test');

describe('#stack_test', function() {
    it('should pass test in stack_test', function() {
        expect(stack_test.overall()).to.equal(true);
    });
});

describe('#bubblesort_test', function() {
    it('should pass test in bubblesort_test', function() {
        expect(bubblesort_test.overall()).to.equal(true);
    });
});