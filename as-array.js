/**
 * @module 101/as-array
 */

/**
 * Maps a `{key: value}` object to an array of `[key, value]` tuples.
 * @function module:101/as-array
 * @param {object} object - The object to be mapped
 * @return {array} The mapped array
 */
module.exports = asArray;

function asArray (object) {
  var key;
  var result = [];

  for (key in object) if (object.hasOwnProperty(key)) {
    result.push([key, object[key]]);
  }

  return result;
}
