/**
* The reduce() method applies a function agai-
* nst an accumulator and each element in the
* array (from left to right) to reduce it to a
* single value. myReduce takes two arguments:
*
* @param {function} cb.
* @param initVal.
*
* myReduce executes the callback function once
* for each element present in the array, excl-
* uding holes in the array, receiving four ar-
* guments:

* @param {function} accumulator.
* @param element.
* @param {number} index.
* @param {array} array.
*/

Array.prototype.myReduce = function(cb, initVal) {

  var accumulator = initVal;
  this.forEach(function(element, index, array) {
    accumulator = cb(accumulator, element, index, array);
  });
  return accumulator;
};
