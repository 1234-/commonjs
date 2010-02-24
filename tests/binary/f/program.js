
exports['test The "binary" module exists'] = function () {
    require("binary");
};

exports['test Constructors'] = require("./constructors");
exports['test Prototype Properties'] = require("./prototype");
exports['test Internal Properties'] = require("./internal");
exports['test Instance Properties'] = require("./instance");

/*
== Notation ==

# The notation functionName(argument Type) indicates that the given behavior
  only occurs when the argument pattern matches the given "Type".
# If the functionName(argument Type) is mentioned for an argument and none of
  the given forms match the types of the argument, the function must throw a
  TypeError.
# The notation functionName(argument_opt) indicates that the argument may be
  undefined or omitted.
# The distinction between an omitted or undefined argument is only detectable
  by checking the <code>arguments.length</code>
# The notation function(Type(argument)) implies that any type matches the
  argument and that it must be internally coerced to the "Type".
# Extra arguments are ignored.

== General Requirements ==

# All of the properties specified on prototypes are not [[Enumerable]] on
  instances.
# All operations that copy values to a byte in the byte buffer implicitly
  coerce the value to a Number and bit mask such values with 0xFF.
# All operations that require encoding, decoding, or transcoding among charsets
  must throw a ValueError if a requested charset is not supported by the
  implementation.  All implementations must support "ascii", "utf-8", and
  "utf-16".
# Charset strings are as defined by IANA
  http://www.iana.org/assignments/character-sets.
# Charsets are case insensitive.
*/

