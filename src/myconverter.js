
var _ = require('underscore');
var LensConverter = require('lens-converter');
var LensArticle = require('lens-article');
var MyConfiguration = require('./myconfiguration');

var MyConverter = function(options) {
  LensConverter.call(this, options);
};

MyConverter.Prototype = function() {

  this.getConfiguration = function(xmlDoc) {
    var publisherName = xmlDoc.querySelector("publisher-name").textContent;
    if (publisherName === 'Rapidiraptor') {
      console.log('Using Rapidiraptor configuration for this article.');
      return new MyConfiguration(this.options);
    } else {
      return LensConverter.getConfiguration.call(this, xmlDoc);
    }
  };

  this.createDocument = function() {
    // It is possible to inject custom node types directly into the LensArticle constructor
    return new LensArticle({
      nodeTypes: {
        raptor: require('./raptor')
      }
    });
  };

};
MyConverter.Prototype.prototype = LensConverter.prototype;
MyConverter.prototype = new MyConverter.Prototype();

module.exports = MyConverter;
