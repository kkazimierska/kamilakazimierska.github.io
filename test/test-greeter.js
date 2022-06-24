"use strict";
exports.__esModule = true;
var greeter_1 = require("../scripts/greeter");
var user = { 'firstName': "Kamila", "lastName": "Kazimierska" };
assert.areEqual((0, greeter_1["default"])(user), "Hello, Kamila Kazimierska");
