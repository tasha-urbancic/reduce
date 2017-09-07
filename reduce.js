// The reduce() method applies a function against an
//  accumulator and each element in the array
//  (from left to right) to reduce it
//  to a single value.

Array.prototype.reduce = function(cb, initVal) {

  for (i = 0; i < this.length; i++) {
    initVal = cb(initVal, this[i]);
  }
  return initVal;
}

var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]

console.log('total', total);
console.log('flattened', flattened);