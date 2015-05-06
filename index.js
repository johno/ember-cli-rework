// 'use strict';

var rework = require('broccoli-rework');
var Funnel = require('broccoli-funnel');

/**
 * Preprocessor
 */

// Preprocessor constructor
function Preprocessor(options) {
  this.name = 'ember-cli-rework';
  this.options = options || {};
}

// Preprocessor.toTree method
Preprocessor.prototype.toTree = function(tree, inputPath, outputPath, inputOptions) {
  // Apply rework plugins to css
  var reworkTree = function reworkTree(tree) {
    var plugins = this.options.plugins;

    if (plugins) {
      tree = rework(tree, { use: function(css) {
        plugins.forEach(function(plugin) {
          css.use(plugin);
        });
      }});
    }

    // Return the modified css
    return tree;
  };

  // Passes rework's ouput to broccoli-funnel
  return new Funnel(reworkTree(tree), {
    // Broccoli-funnel options
    srcDir: inputPath,
    destDir: outputPath
  });
};

/**
 * Export
 */

// Export rework preprocessor
module.exports = {
  name: 'ember-cli-rework',

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.registry.add('css', new Preprocessor(app.options && app.options.rework));
  }
};
