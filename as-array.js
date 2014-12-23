/**
 * @module 101/as-array
 */

/**
 * Maps a `{key: value}` object to an array of `{key: key, value: value}` pairs.
 * @function module:101/as-array
 * @param {object} object - The object to be mapped
 * @return {array} A new array of key-value pairs mapped from the object
 */
module.exports = asArray;

function asArray (object) {
  var key;
  var result = [];

  for (key in object) if (object.hasOwnProperty(key)) {
    result.push({key: key, value: object[key]});
  }

  return result;
}
