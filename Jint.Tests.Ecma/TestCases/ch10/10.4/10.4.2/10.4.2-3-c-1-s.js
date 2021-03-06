/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch10/10.4/10.4.2/10.4.2-3-c-1-s.js
 * @description Direct eval code in strict mode - cannot instantiate variable in the variable environment of the calling context
 * @onlyStrict
 */


function testcase() {
  var _10_4_2_3_c_1_s = 0;
  function _10_4_2_3_c_1_sFunc() {
     eval("'use strict';var _10_4_2_3_c_1_s = 1");
     return _10_4_2_3_c_1_s===0;
  } 
  return _10_4_2_3_c_1_sFunc();
 }
runTestCase(testcase);
