'use strict';

var rework = require('broccoli-rework');

module.exports = {
  name: 'ember-cli-rework',

  included: function(app) {
    this.app = app;
    this.plugins = this.app.options.reworkPlugins;
  },

  postprocessTree: function(type, tree) {
    var plugins = this.plugins;
    if (plugins && (type === 'all' || type === 'styles')) {
      tree = rework(tree, { use: function(css) {
        plugins.forEach(function(plugin) {
          css.use(plugin);
        });
      }});
    }

    return tree;
  }
};
