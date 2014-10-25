"use strict";

var _ = require('underscore');
var Document = require('substance-document');

// Lens.Raptor
// -----------------
//

var Raptor = function(node, doc) {
  Document.Node.call(this, node, doc);
};

// Type definition
// -----------------
//

Raptor.type = {
  "id": "raptor",
  "parent": "content",
  "properties": {
    "img_path": "string",
    "short_description": "string"
  }
};

Raptor.Prototype = function() {
  this.getHeader = function() {
    return "Raptor";
  };
};
Raptor.Prototype.prototype = Document.Node.prototype;
Raptor.prototype = new Raptor.Prototype();
Raptor.prototype.constructor = Raptor;

Document.Node.defineProperties(Raptor);

module.exports = Raptor;
