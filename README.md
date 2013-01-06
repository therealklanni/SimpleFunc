# SimpleFunc

Simple object with functions encode/decode, serialization/deserialization.

## Installation

Via npm on Node:

```
npm install simplefunc
```


## Usage

Reference in your program:
```js
var simplefunc = require('simplefunc');
```

Encoding a value
```js
var encoded = simplefunc.encode(value);
```
Most value are encoded as themselves. The current implementation returns an encoded result if the original value is
an object and it has functions. If value is an object with functions, an object is returned, with two properties:
- `_obj`: with the properties of the original value, that are NOT functions.
- `_fns`: with the properties of the original value that ARE functions, encoding in an array with its parameters and code
If the value to encode is a function, an object is returned with an attribute `_fn` with an array containing the original
function arguments and code serialized to string.

TBD

## Development

```
git clone git://github.com/ajlopez/SimpleFunc.git
cd SimpleFunc
npm install
npm test
```

## Samples

TBD

## To do

- Samples
- Deep processing

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleFunc) and submit
[pull requests](https://github.com/ajlopez/SimpleFunc/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

