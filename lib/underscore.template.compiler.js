'use strict';

function UnderscoreCompiler () {}

UnderscoreCompiler.prototype = {

  fetch: function (filename, callback) {
    var fs = require('fs');

    fs.readFile(filename, 'utf-8', function(err, text) {
      if (err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
      }

      if (typeof callback === 'function') {
        callback(text);
      }

      return text;
    });
  },

  compile: function (text) {
    var underscore = require('underscore');

    return underscore.template(text);
  },

  write: function (filename, text) {
    var fs = require('fs');
    fs.writeFile(filename, text, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("The file " + filename + " was saved!");
      }
    });
  },

  getText: function (text, callback) {
    if (typeof callback === 'function') {
      callback(text);
    }

    return text;
  },

  wrapRequireJS: function (text) {
    return 'define(function() { return ' + text + '; });';
  },

  main: function (inFilename, outFilename) {
    if (typeof outFilename === 'undefined') {
      outFilename = inFilename + '.js';
    }

    var _this = this;
    this.fetch(inFilename, function(text) {
      var source = _this.compile(text).source;

      _this.getText(source, function(text) {
        var content = _this.wrapRequireJS(text);
        _this.write(outFilename, content);
      });
    });
  }
};

module.exports.UnderscoreCompiler = UnderscoreCompiler;
