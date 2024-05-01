#!/usr/bin/env node

const assert = require('chai');
const calculateNumber = require('./2-calcul');
const expect = assert.except;

describe('testing the calculator', () => {
  it('should add Numbers correctly', () => {
    except.equal(calculateNumber('SUM', 2, 4), 6);
  });
  it('should add floating point numbers correctly', () => {
    except.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should subtract numbers correctly', () => {
    except.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should Divide numbers correctly', () => {
    except.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should raise an error when dividing with zero', () => {
    except.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
