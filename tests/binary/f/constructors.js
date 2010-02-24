
var ASSERT = require("assert");
var BINARY, Buffer, section;

exports['test The "binary" module exists'] = function () {
    BINARY = require("binary");
};

exports['test A buffer function must exist.'] = function () {
    Buffer = BINARY.Buffer;
    ASSERT.ok(typeof Buffer === "function");
};

exports['test Calling and constructing a Buffer both return a new Buffer ' +
'instance'] = function () {
    ASSERT.ok(new Buffer(0) instanceof Buffer);
    ASSERT.ok(Buffer(0) instanceof Buffer);
};

exports['test Buffers are instances of Buffer and Object'] = function () {
    ASSERT.ok(new Buffer(0) instanceof Buffer);
    ASSERT.ok(new Buffer(0) instanceof Object);
    ASSERT.ok(Buffer(0) instanceof Buffer);
    ASSERT.ok(Buffer(0) instanceof Object);
};

exports['test The type of a Buffer is "object".'] = function () {
    ASSERT.ok(typeof new Buffer(0) === "object");
    ASSERT.ok(typeof Buffer(0) === "object");
};

exports['test Any call or construction of Buffer that does not have a ' +
'Number, Buffer, Array, or String as its first argument throws a ' +
'TypeError.'] = function () {
    ASSERT['throws'](function () {
        new Buffer({});
    }, TypeError);
    ASSERT['throws'](function () {
        new Buffer(new Date());
    }, TypeError);
// Why does this case throw? Does it make sense to distinguish between boxed
// and unboxed?
// -- ashb Ash Berlin
// To relieve implementors of the burden of having to support unboxing.
// Unboxing would normally be supported for coerced arguments, but it is not
// possible in this case to simply coerce the first argument because the first
// argument must be used to decide which constructor behavior to use. 
// -- kriskowal Kris Kowal
    ASSERT['throws'](function () {
        new Buffer(new Number(0));
    }, TypeError);
};

// I'm not sure this is 1) needed, and 2) actually possible to set the
// fn.length from a C++ bound constructor in spidermonkey. Will need to check
// if people think its worth keeping.
// -- ashb Ash Berlin
// I've provisionally removed these requirements; I wouldn't want otherwise
// compliant implementations to be unable to claim that they conform because of
// this requirement.
// -- kriskowal Kris Kowal
/*
exports['test The "length" of Buffer is 1'] = function () {
    ASSERT.equal(Buffer.length, 1);
};
*/

section = exports['test Buffer(length Number, Number(fill_opt))'] = {};

section['test New Buffer of the given length, with the given fill ' +
'number at all offsets.'] = function () {
    [0, 127, 128, 255].forEach(function (fill) {
        [0, 7, 8].forEach(function (length) {
            var buffer = new Buffer(length, fill);
            ASSERT.equal(buffer.length, length);
            for (var i = 0, ii = length; i < ii; i++) {
                ASSERT.equal(buffer[i], fill);
            };
        });
    });
    ASSERT['throws'](function () {
        var buffer = new Buffer(0);
        buffer[0];
    }, RangeError);
    ASSERT['throws'](function () {
        var buffer = new Buffer(1);
        buffer[-1];
    }, RangeError);
};

section['test The default filler is 0'] = function () {
    ASSERT.equal(Buffer(1)[0], 0);
};

section = exports['test Buffer(source Buffer, Number(start_opt), ' + 
'Number(stop_opt), Boolean(copy_opt))'] = {};

section['test New Buffer that is either a copy or a view of the ' +
'allocation as the given buffer, from "start" to "stop".'] = function () {
    var buffer = Buffer(2);
    // [0, 0]
    buffer[1] = 1;
    // [0, 1]
    var copy = Buffer(buffer);
    // [0, 1], [0, 1]
    ASSERT.equal(copy.length, 2);
    ASSERT.equal(copy[0], 0);
    ASSERT.equal(copy[1], 1);
    copy[1] = 2;
    // [0, 1], [0, 2]
    ASSERT.equal(buffer[1], 1);
    ASSERT.equal(copy[1], 2);
    var view = Buffer(buffer, undefined, undefined, false);
    // [0, 1]
    ASSERT.equal(view.length, 2);
    ASSERT.equal(view[0], 0);
    ASSERT.equal(view[1], 1);
    view[1] = 3;
    // [0, 3]
    ASSERT.equal(buffer[1], 3);
    ASSERT.equal(view[1], 3);
    buffer[1] = 4;
    // [0, 4]
    ASSERT.equal(buffer[1], 4);
    ASSERT.equal(view[1], 4);
    var range = Buffer(buffer, 1, undefined, false);
    // [4]
    ASSERT.equal(buffer[1], 4);
    ASSERT.equal(range[0], 4);
    buffer[1] = 5;
    // [4]
    ASSERT.equal(range[0], 5);
    range[0] = 6;
    ASSERT.equal(buffer[1], 6);
    var nullBuffer = Buffer(buffer, 1, 1, false);
    ASSERT.equal(nullBuffer.length, 0);
};

section['test "start" is 0 if undefined or omitted.'] = function () {
    var buffer, view;
    buffer = Buffer(2);
    buffer[0] = 1;
    view = Buffer(buffer);
    ASSERT.equal(view[0], 1);
    view = Buffer(buffer, 1);
    ASSERT.equal(view[0], 0);
    ASSERT.equal(view.length, 1);
};

section['test "stop" is the other buffer\'s length if undefined or ' +
'omitted.'] = function () {
    var view, buffer;
    buffer = Buffer(2);
    view = Buffer(buffer);
    ASSERT.equal(view.length, 2);
    view = Buffer(buffer, undefined, undefined);
    ASSERT.equal(view.length, 2);
};

section['test "start" and "stop" may both be negative numbers, in ' +
'which case they correspond to offsets counting from the length of ' +
'the buffer.'] = function () {
    var buffer = Buffer([0, 1, 2, 3]);
    var slice = new Buffer(buffer, -3, -1);
    ASSERT.equal(slice.length, 2);
    ASSERT.equal(slice[0], 1);
    ASSERT.equal(slice[1], 2);
};

section['test "copy" is true if undefined or omitted'] = function () {
    var buffer = Buffer([0, 1, 2, 3]);
    var slice = new Buffer(buffer);
    buffer[0] = 10;
    ASSERT.equal(slice[0], 0);
};

section['test When true, "copy" indicates that the buffer must have its ' +
'own copy of the allocation.'] = function () {
    var buffer = Buffer([0, 1, 2, 3]);
    var slice = new Buffer(buffer, undefined, undefined, true);
    buffer[0] = 10;
    ASSERT.equal(slice[0], 0);
};

section['test When false, "copy" indicates that the buffer must share ' +
'its allocation with the given buffer.'] = function () {
    var buffer = Buffer([0, 1, 2, 3]);
    var slice = new Buffer(buffer, undefined, undefined, false);
    buffer[0] = 10;
    ASSERT.equal(slice[0], 10);
};

section = exports['test Buffer(source Array, Number(start_opt), ' +
'Number(stop_opt))'] = {};

section['test New Buffer that contains the respective values from the ' +
'given array, from "start" to "stop".'] = function () {
    var buffer = new Buffer([0, 1, 2, 3], 1, 3);
    ASSERT.equal(buffer.length, 2);
    ASSERT.equal(buffer[0], 1);
    ASSERT.equal(buffer[1], 2);
};

// as mentioned in the general requirements:
section['test Array values are coerced to Number (boxed ' +
'Number)'] = function () {
    var buffer = new Buffer([new Number(1)]);
    ASSERT.equal(buffer[0], 1);
};

// as mentioned in the general requirements:
section['test Array values are coerced to Number ' +
'(valueOf)'] = function () {
    var buffer = new Buffer([{
        "valueOf": function () {
            return 1;
        }
    }]);
    ASSERT.equal(buffer[0], 1);
};

// as mentioned in the general requirements:
section['test Array values are masked with 0xFF'] = function () {
    var buffer = new Buffer([257]);
    ASSERT.equal(buffer[0], 1); 
};

section['test Array values are coerced to Number and masked with ' +
'0xFF'] = function () {
    var buffer = new Buffer([{
        "valueOf": function () {
            return 257;
        }
    }]);
    ASSERT.equal(buffer[0], 1); 
};

section['test "stop" is the array\'s "length" if undefined or ' +
'omitted.'] = function () {
    var buffer = new Buffer([0, 1, 2, 3]);
    ASSERT.equal(buffer.length, 4);
    buffer = new Buffer([0, 1, 2, 3], 1, undefined);
    ASSERT.equal(buffer.length, 3);
};

/*
section['test The "length" of the new buffer is exactly the length from ' +
'"start" to "stop".'] = function () {
    // TODO
};
*/

section['test "start" and "stop" may both be negative numbers, in which ' +
'case they correspond to offsets counting from the length of the ' +
'array.'] = function () {
    // TODO
};

section = exports['test Buffer(string String, String(charset))'] = {};

section['test Create a buffer from a string, the result being encoded ' +
'with "charset".'] = function () {
    // TODO
};

// implied
exports['test Constructing a Buffer with a String and no charset throws ' +
'a TypeError'] = function () {
    ASSERT['throws'](function () {
        new Buffer('');
    }, TypeError);
};

