var fs = require('fs'),
	Compiler = require('./lib/underscore.template.compiler').UnderscoreCompiler,
	compiler = new Compiler();

var compileFiles = function (files, inDir, outDir) {
	var l = files.length,
		file;

	while (l--) {
		file = files[l];
		compiler.main([inDir, file].join(''), [outDir, file, '.js'].join(''));
	}
};

var argsparser = require('argsparser'),
	args = process.argv;

var params = argsparser.parse(args);

if (params['-i'] && params['-o']) {
	var inDir = params['-i'],
		outDir = params['-o'];

	fs.readdir(inDir, function (err, files) {
		compileFiles(files, inDir + '/', outDir + '/');
	});
}
else {
	var files = args.slice(2);
	compileFiles(files);
}