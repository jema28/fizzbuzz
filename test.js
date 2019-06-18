var test = require('tape');
var fizzbuzz = require('./index.js');

test('Testing Tape is working', function(t) {
  t.equal(fizzbuzz(), 1, 'One should equal one');
  t.end();
});
