"use strict";

var NodeView = require("substance-nodes")['node'].View;
var $$ = require("substance-application").$$;

var RaptorView = function(node, viewFactory) {
  NodeView.call(this, node, viewFactory);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node raptor");
};

RaptorView.Prototype = function() {

  // Render it
  // --------

  this.render = function () {
    var raptorPath = this.node.img_path;
    var raptorDesc = this.node.short_description;
    var outEl;

    this.content = $$('div.content');
    outEl = document.createElement('img');
    if (raptorPath) {
      outEl.setAttribute('src', raptorPath);
       if (raptorDesc) {
          outEl.setAttribute('alt', raptorDesc);
       }
    }
    this.content.appendChild(outEl);
    this.el.appendChild(this.content);

    return this;
  };
};

RaptorView.Prototype.prototype = NodeView.prototype;
RaptorView.prototype = new RaptorView.Prototype();
RaptorView.prototype.constructor = RaptorView;

module.exports = RaptorView;
