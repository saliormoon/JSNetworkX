/*global utils, assert*/
"use strict";

var genCombinations = require('../genCombinations');

exports.genCombinations = {
  combinations: function() {
    var combinations = genCombinations([0,1,2,3], 3);
    assert(utils.isIterator(combinations));
    assert.deepEqual(
      utils.toArray(combinations),
      [[0,1,2], [0,1,3], [0,2,3], [1,2,3]]
    );
  },

  'combinations size > elements': function() {
    var combinations = genCombinations([0,1,2,3], 10);
    assert(utils.isIterator(combinations));
    assert.deepEqual(utils.toArray(combinations), []);
  },

  'empty sequence': function() {
    var combinations = genCombinations([], 2);
    assert(utils.isIterator(combinations));
    assert.deepEqual(utils.toArray(combinations), []);
  }
};
