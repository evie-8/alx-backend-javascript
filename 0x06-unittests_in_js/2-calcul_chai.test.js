#!/usr/bin/env node

/* eslint disable*/
const assert = require('chai');
const calculateNumber = require('./2-calcul_chai');
const expect = assert.expect;

describe('testing the calculator', () => {
  it('should add Numbers correctly', () => {
    expect.equal(calculateNumber('SUM', 2, 4), 6);
  });
  it('should add floating point numbers correctly', () => {
    expect.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should subtract numbers correctly', () => {
    expect.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should Divide numbers correctly', () => {
    expect.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should raise an error when dividing with zero', () => {
    expect.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
