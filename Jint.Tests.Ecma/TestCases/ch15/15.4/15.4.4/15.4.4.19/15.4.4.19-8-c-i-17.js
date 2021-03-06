/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-8-c-i-17.js
 * @description Array.prototype.map - element to be retrieved is own accessor property without a get function on an Array-like object
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 1) {
                return typeof val === "undefined";
            }
            return false;
        }

        var obj = { length: 2 };

        Object.defineProperty(obj, "1", {
            set: function () { },
            configurable: true
        });

        var testResult = Array.prototype.map.call(obj, callbackfn);

        return testResult[1] === true;
    }
runTestCase(testcase);
