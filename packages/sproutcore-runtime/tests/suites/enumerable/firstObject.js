// ==========================================================================
// Project:  SproutCore Runtime
// Copyright: ©2011 Strobe Inc. and contributors.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('sproutcore-runtime/~tests/suites/enumerable');

var suite = Ember.EnumerableTests;

suite.module('firstObject');

suite.test('firstObject return first item in enumerable', function() {
  var obj = this.newObject();
  equals(Ember.get(obj, 'firstObject'), this.toArray(obj)[0]);
});
