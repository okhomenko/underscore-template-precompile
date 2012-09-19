'use strict';

var fs = require('fs'),
  argsparser = require('argsparser'),
  chokidar = require('chokidar'),
  UnderscoreTemplateCompiler = require('./lib/underscore.template.compiler').UnderscoreCompiler,
  compiler = new UnderscoreTemplateCompiler();

var compileFiles = function (files, inDir, outDir) {
  var l = files.length,
    file;

  while (l--) {
    file = files[l];
    compiler.main([inDir, file].join(''), [outDir, file, '.js'].join(''));
  }
};

var 
  args = process.argv,
  params = argsparser.parse(args),
  inDir = params['-i'],
  outDir = params['-o'],
  watch = params['-w'],
  inFile, outFile, filename,
  watcher;

watcher = chokidar.watch(inDir, {ignored: /^\./, persistent: true});

watcher
  .on('add', function (path) {
    console.log('File ', path, ' has been added');
    filename = path.substr(path.indexOf(inDir) + inDir.length + 1),
    outFile = [outDir, '/', filename, '.js'].join('');
    compiler.main(path, outFile);
  })
  .on('change', function (path) {
    console.log('File ', path, ' has been changed');
    filename = path.substr(path.indexOf(inDir) + inDir.length + 1),
    outFile = [outDir, '/', filename, '.js'].join('');
    compiler.main(path, outFile);
  })
  .on('unlink', function (path) {
    console.log('File ', path, ' has been removed');
  })
  .on('error', function (error) {
    console.error('Error happened: ', error);
  });

watcher.close();
