"use strict";

var _ = require('underscore');
var LensArticleNodes = require('lens-article/nodes');
var NodeView = LensArticleNodes['node'].View;
var ResourceView = require("lens-article").ResourceView;

var RaptorView = function(node, viewFactory, options) {
  NodeView.call(this, node, viewFactory);

  ResourceView.call(this, options);

  this.$el.attr({id: node.id});
  this.$el.addClass("content-node raptor");
};

RaptorView.Prototype = function() {

  _.extend(this, ResourceView.prototype);

  // Render it
  // --------

  this.render = function () {
    NodeView.prototype.render.call(this);

    this.renderHeader();

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
