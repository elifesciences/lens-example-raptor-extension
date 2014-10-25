var DefaultConfiguration = require('lens-converter').DefaultConfiguration;

var MyConfiguration = function() {
  DefaultConfiguration.apply(this, arguments);
};

MyConfiguration.Prototype = function() {

  this.viewMapping.raptor = "content";

  this.showNode = function(state, node) {
    DefaultConfiguration.prototype.showNode.call(this, state, node);
  };

};

MyConfiguration.Prototype.prototype = DefaultConfiguration.prototype;
MyConfiguration.prototype = new MyConfiguration.Prototype();
MyConfiguration.prototype.constructor = MyConfiguration;

module.exports = MyConfiguration;
