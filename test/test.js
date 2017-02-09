const assert = require('assert');
const dropPunctuation = require('../');

describe('dropPunctuation', () => {
  it('should not mess with string with no punctuation at the end', () => {
    assert.equal(dropPunctuation('Hello World'), 'Hello World');
  });

  it('should remove a single period from the end of a string', () => {
    assert.equal(dropPunctuation('Hello World.'), 'Hello World');
  });

  it('should remove a single exclamation point from the end of a string', () => {
    assert.equal(dropPunctuation('Hello World!'), 'Hello World');
  });

  it('should remove a single question mark from the end of a string', () => {
    assert.equal(dropPunctuation('Hello World?'), 'Hello World');
  });

  it('should remove multiple period from the end of a string', () => {
    assert.equal(dropPunctuation('Hello World...'), 'Hello World');
  });

  it('should remove multiple exclamation point from the end of a string', () => {
    assert.equal(dropPunctuation('Hello World!!!'), 'Hello World');
  });

  it('should remove multiple question mark from the end of a string', () => {
    assert.equal(dropPunctuation('Hello World???'), 'Hello World');
  });

  it('should remove any combination of punctuation marks from the end of a string', () => {
    assert.equal(dropPunctuation('Hello World.!?'), 'Hello World');
  });
});
