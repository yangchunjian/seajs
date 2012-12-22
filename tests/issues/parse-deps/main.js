define(function(require, exports, module) {

  var test = require('../../test');

  require('./a');
  require  ('b')
  require("b");
  var o = {
    require: function() {
    },
    f:require('./f')
  };
  o.require('d');
  o.require(require('e'   ));

  var $require = function() {};
  $require('$require');

  var xrequire = function() {};
  xrequire('xrequire');

  test.assert(require('b').name === 'b', 'b');
  test.assert(require('e').name === 'e', 'e');
  test.assert(module.dependencies.length === 6, module.dependencies);

  test.done();

  /**
   * @fileoverview Module authoring format.
   */

  var define = function() {
    // some comment
    var reg = /.*/g; // comment */
  }

  /* ok, I will disappear. */
  var s = '// i am string'; require('./x');
  var t = 'i am string too'; // require('z');

  /* will not // be removed */ var xx = 'a';

  //
  //     var Calendar = require('calendar');

  var str = " /* not a real comment */ ";
  var regex = /\/*.*/;
  var tt = '"\'';

  var xxxx = 'require("show_me_the_money")';

  var r = /\/*require('r')*/;
  var r2 = /require('r2')/;
  var weird = / \/\/ \/b\//g;

});

define('b', { name: 'b' });
define('e', { name: 'e' });