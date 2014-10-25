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
    NodeView.prototype.render.call(this);

    var raptorPath = this.node.img_path || 'data/raptor.jpg';
    var raptorDesc = this.node.short_description || 'This is Ravi Raptor';
    var outEl;

    outEl = document.createElement('img');
    outEl.setAttribute('src', raptorPath);
    outEl.setAttribute('alt', raptorDesc);

    this.content.appendChild(outEl);

    return this;
  };
};

RaptorView.Prototype.prototype = NodeView.prototype;
RaptorView.prototype = new RaptorView.Prototype();
RaptorView.prototype.constructor = RaptorView;

module.exports = RaptorView;
