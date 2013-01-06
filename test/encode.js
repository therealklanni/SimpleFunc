
var simplefunc = require('../'),
    assert = require('assert');

// encode defined

assert.ok(simplefunc.encode);
assert.equal(typeof simplefunc.encode, 'function');

