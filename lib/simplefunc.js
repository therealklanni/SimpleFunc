
'use strict';

var simplefunc = (function () {
    function encode(obj) {
    };

    return {
        encode: encode
    }
})();

if (typeof window === 'undefined') {
	module.exports = simplefunc;
}
