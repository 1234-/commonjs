
var ASSERT = require("assert");
var BINARY, section;

section = exports['test toString() String'] = {};

section['test Returns a debug representation like "[Buffer 10]", ' +
'where 10 is the length this Buffer.'] = function () {
    // TODO
};

section['test This behavior of "toString" occurs if the ' +
'"arguments.length" is 0.'] = function () {
    // TODO
};

section = exports['test toString(String(charset)) String'] = {};

section['test Decodes this according to the given character set and ' +
'returns the String from the corresponding unicode points.'] = function () {
    // TODO
};

section['test Throws a ValueError if the buffer is malformed for the ' +
'given character set or if any of the code points are out of the ' +
'implementation\'s supported range.'] = function () {
    // TODO
};

section['test This behavior of "toString" occurs if the ' +
'"arguments.length" is not 0.'] = function () {
    // TODO
};

/*
exports['test The "length" of "toString" is 1.'] = function () {
    // TODO
};
*/

section = exports['test toSource() String'] = {};

section['test Returns "<tt>require("binary").Buffer([])</tt>" for a ' +
'null buffer or "<tt>require("binary").Buffer([0, 1, 2])</tt>" for a ' +
'buffer of length 3 with bytes 0, 1, and 2.'] = function () {
    // TODO
};

/*
section['test The "length" of "toSource" is 0.'] = function () {
    // TODO
};
*/

section = exports['test range(Number(start_opt), Number(stop_opt)) ' +
'Buffer'] = {};

section['test Returns a Buffer that views the given range of the ' +
'same allocated byte buffer.'] = function () {
    // TODO
};

section['test  "start" is 0 if undefined or omitted.'] = function () {
    // TODO
};

section['test "stop" is the length of this buffer if undefined or ' +
'omitted.'] = function () {
    // TODO
};

section['"start" and "stop" may be negative numbers, in which case ' +
'they correspond to an offset counting from this buffer\'s ' +
'length.'] = function () {
    // TODO
};

section['The length of "range" is 2.'] = function () {
    // TODO
};

section = exports['test slice(Number(start_opt), Number(stop_opt)) ' +
'Buffer'] = {};

section['test Returns a Buffer with a new internal allocation, ' +
'containing a copy of this buffer from "start" to "stop" ' +
'offsets.'] = function () {
    // TODO
};

section['test "start" is 0 if undefined or omitted.'] = function () {
    // TODO
};

section['test "stop" is this buffer\'s length if undefined or ' +
'omitted.'] = function () {
    // TODO
};

section['test "start" and "stop" may be negative numbers, in which ' +
'case they correspond to an offset counting from this buffer\'s ' +
'length.'] = function () {
    // TODO
};

/*
# The "length" of "slice" is 2.
*/

section = exports['test copy(target, Number(targetStart_opt), ' +
'Number(start_opt)), Number(stop_opt)) Buffer'] = function () {
    // TODO
};

section['test Copies the Number values of each byte from this ' +
'between "start" and "stop" to a "target" Buffer or Array at the ' + 
'"targetStart" offset.'] = function () {
    // TODO
};

section['test "stop" is the length of this if undefined or ' +
'omitted.'] = function () {
    // TODO
};

section['test "targetStart", "start", and "stop" are internally ' +
'coerced to Numbers with the Number constructor.'] = function () {
    // TODO
};

section['test "targetStart" may be negative, in which case it ' +
'corresponds to an offset counting from the length of the ' +
'target.'] = function () {
    // TODO
};

section['test "start" and "stop" may be negative, in which case they ' +
'correspond to an offset counting from this buffer\'s ' +
'length.'] = function () {
    // TODO
};

section['test Throws a TypeError if the target is not a Buffer or ' +
'Array.'] = function () {
    // TODO
};

section['test Returns this.'] = function () {
    // TODO
};

/*
# The "length" of "copy" is 1.
*/

section = exports['test copyFrom(source, Number(sourceStart_opt), ' +
'Number(start_opt), Number(stop_opt)) Buffer'] = {};

section['test Copies the Number values of each byte from a given ' +
'Buffer or Array into this from "start" to "stop" from the given ' +
'"sourceStart" offset.'] = function () {
    // TODO
};

section['test "start" is 0 if undefined or omitted.'] = function () {
    // TODO
};

section['test "stop" is the length of this buffer if undefined or ' +
'omitted.'] = function () {
    // TODO
};

section['test "sourceStart" may be negative, in which case it ' +
'corresponds to an offset counting from this buffer\'s ' +
'length.'] = function () {
    // TODO
};

section['test "start" and "stop" may be negative, in which case they ' +
'correspond to offsets counting from the length of the ' +
'source.'] = function () {
    // TODO
};

section['test "sourceStart", "start", and "stop" are internally ' +
'coerced to Numbers with the Number constructor.'] = function () {
    // TODO
};

section['test If the source is an Array, all values of that array are ' +
'coerced to Numbers and masked with 0xFF.'] = function () {
    // TODO
};

section['test Throws a TypeError if the target is not a Buffer or ' +
'Array.'] = function () {
    // TODO
};

section['test Returns this.'] = function () {
    // TODO
};

/*
# The "length" of "copyFrom" is 1.
*/

section = exports['test fill(Number(value), Number(start_opt), ' +
'Number(stop_opt)) Buffer'] = {};

section['test Fills all of this buffer\'s bytes with the given value ' +
'as a Number from the "start" offset to the "stop" offset.'] = function () {
    // TODO
};

section['test "start" is 0 if undefined or omitted.'] = function () {
    // TODO
};

section['test "stop" is the length of this buffer if undefined or ' +
'omitted.'] = function () {
    // TODO
};

section['test "start" and "stop" may be negative, in which case they ' +
'correspond to offsets counting from the length of this ' +
'buffer.'] = function () {
    // TODO
};

section['test "value" is 0 if undefined or omitted.'] = function () {
    // TODO
};

section['test "value" is coerced to Number and masked with ' +
'0xFF.'] = function () {
    // TODO
};

section['test Returns this.'] = function () {
    // TODO
};

/*
# The "length" of "fill" is 1.
*/

section = exports['test Content'] = {};

section['test an alias of Number, indicating that Number is the type ' +
'of what [[Get]] returns.'] = function () {
    // TODO
};

