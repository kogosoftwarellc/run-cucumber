# run-cucumber [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Gitter chat][gitter-image]][gitter-url]
> Run cucumber feature files in parallel.

`run-cucumber` runs cucumber feature files in parallel with `bad` and `cucumber.js`.  It's useful for CI environments like Jenkins.

## Installation

`npm i -g run-cucumber`

## Example

```
run-cucumber --feature-dir ./path/to/my/features \
             --concurrency 5 \
             --support-file ./path/to/my/support-file.js \
             --tags ~@skip
```

Use `-h` or `--help` to see the full list of options.

## LICENSE
``````
The MIT License (MIT)

Copyright (c) 2016 Kogo Software LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/run-cucumber.svg
[npm-url]: https://npmjs.org/package/run-cucumber
[npm-image]: http://img.shields.io/npm/v/run-cucumber.svg

[gitter-url]: https://gitter.im/kogosoftwarellc/run-cucumber
[gitter-image]: https://badges.gitter.im/kogosoftwarellc/run-cucumber.png
[screencast-image]: ./cast.gif?raw=true "Screencast of run-cucumber being used in a terminal window"
[react-image]: ./react-logo.png "React is awesome!"
