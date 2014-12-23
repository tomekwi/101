/**
 * @module 101/as-object
 */

/**
 * Maps an array of `{key: key, value: value}` pairs to a `{key: value}` object.
 * @function module:101/as-object
 * @param {object} object - The array of key-value pairs to be mapped
 * @return {array} A new object mapped from the array
 */
module.exports = asObject;

function asObject (array) {
  var i, l, pair;
  var result = {};

  i = 0; l = array.length; while (i < l) {
    pair = array[i++];
    result[pair.key] = pair.value;
  }

  return result;
}
