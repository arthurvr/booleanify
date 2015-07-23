# booleanify [![Build Status](https://travis-ci.org/arthurvr/booleanify.svg?branch=master)](https://travis-ci.org/arthurvr/booleanify)

> Convert a value to a boolean - recognizes `'true'` and `'false'` strings


## Install

```
$ npm install --save booleanify
```


## Usage

```js
var booleanify = require('booleanify');

booleanify('true');
//=> true

booleanify('false');
//=> false

booleanify(false);
//=> false

booleanify('');
//=> false

booleanify(123);
//=> true
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
