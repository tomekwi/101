/**
 * @module 101/as-object
 */

/**
 * Maps an array of `[key, value]` tuples to a `{key: value}` object.
 * @function module:101/as-object
 * @param {object} object - The array to be mapped
 * @return {array} A new object mapped from the array
 */
module.exports = asObject;

function asObject (array) {
  var i, l, tuple;
  var result = {};

  i = 0; l = array.length; while (i < l) {
    tuple = array[i++];
    result[tuple[0]] = tuple[1];
  }

  return result;
}
