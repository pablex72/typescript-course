"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_module_1 = require("./utils.module");
var myNumber = 10 * utils_module_1.PI;
var myUser = { id: '1', name: "Kevin" };
var myUser2 = { id: (0, utils_module_1.generateId)().toString(), name: "Kevin" };
console.log({
    myNumber: myNumber,
    myUser: myUser
});
