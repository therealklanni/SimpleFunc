
var simplefunc = require('../'),
    assert = require('assert');

// encode defined

assert.ok(simplefunc.encode);
assert.equal(typeof simplefunc.encode, 'function');

var value = 3;
assert.equal(simplefunc.encode(value), value);

var value = "foo";
assert.equal(simplefunc.encode(value), value);
