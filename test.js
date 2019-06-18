var test = require('tape');
var fizzbuzz = require('./index.js');

test('Testing Tape is working', function(t) {
  t.equal(1, fizzbuzz(), 'One should equal one');
  t.end();
});
