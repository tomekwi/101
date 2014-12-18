/**
 * @module 101/set
 */

import assign from './assign';
import isString from './is-string';
import isObject from './is-object';

/**
 * Functional version of obj[key] = val.
 * When only a key and val are specified set returns a partial-function which accepts obj.
 * @function module:101/set
 * @param {*} [obj] - object on which the values will be set
 * @param {string} key - key of the value being set on obj
 * @param {*} val - value of the key being set on obj
 * @return {*|function} New obj with new value set or Partial-function set (which accepts obj) and returns a new obj with val set
 */
export default set;

function set (obj, key, val) {
  var setObj;
  if (arguments.length === 1) {
    // (setObj)
    setObj = obj;
    return function (obj) {
      return assign(obj, setObj); // extends original
    };
  }
  if (arguments.length === 2) {
    if (isString(obj) || typeof obj === 'number') {
      // (key, val)
      val = key;
      key = obj;
      setObj = {};
      setObj[key] = val;
      return function (obj) {
        return assign(obj, setObj); // extends original
      };
    }
    else if (isObject(key)) {
      // (obj, setObj)
      setObj = key;
      return assign(obj, setObj); // extends original
    }
    else {
      throw new TypeError('Invalid arguments: expected str, val or val, obj');
    }
  }
  else {
    setObj = {};
    setObj[key] = val;
    return assign(obj, setObj); // extends original
  }
}
