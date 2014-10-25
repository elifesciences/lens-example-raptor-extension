var Lens = require('lens');
var MyConverter = require('./myconverter');
var ResourcePanelViewFactory = Lens.ResourcePanelViewFactory;

var LensWithRaptor = function(config) {
  config = config || {};
  config.converter = new MyConverter(config);
  Lens.call(this, config);
};

var raptorsPanel = {
  type: 'resource',
  container: 'raptors',
  label: 'Raptors',
  title: 'Raptors',
  icon: 'icon-twitter',
  viewFactory: ResourcePanelViewFactory
};

LensWithRaptor.Prototype = function() {
  this.getPanelFactory = function() {
    var panelSpecs = Lens.getDefaultPanelSpecification();
    panelSpecs.panels.raptors = raptorsPanel;
    panelSpecs.panelOrder = ['toc', 'raptors', 'figures', 'citations', 'definitions', 'info'];
    return new Lens.Reader.PanelFactory(panelSpecs);
  };
};
LensWithRaptor.Prototype.prototype = Lens.prototype;
LensWithRaptor.prototype = new LensWithRaptor.Prototype();

module.exports = LensWithRaptor;
