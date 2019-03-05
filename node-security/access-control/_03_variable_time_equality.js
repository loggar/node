/**
 * constantEquals(x, y)
 *
 * Compare two strings, x and y with a constant time
 * algorithm to prevent attacks based on timing statistics.
 */
constantEquals = function constantEquals(x, y) {
  var result = true,
    length = (x.length > y.length) ? x.length : y.length,
    i;

  for (i = 0; i < length; i++) {
    if (x.charCodeAt(i) !== y.charCodeAt(i)) {
      result = false;
    }
  }
  return result;
};
