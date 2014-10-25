var Lens = require('lens');
var MyConverter = require('./myconverter');

var LensWithRaptor = function(config) {
  config = config || {};
  config.converter = new MyConverter(config);
  Lens.call(this, config);
};
LensWithRaptor.Prototype = function() {
};
LensWithRaptor.Prototype.prototype = Lens.prototype;
LensWithRaptor.prototype = new LensWithRaptor.Prototype();

module.exports = LensWithRaptor;
