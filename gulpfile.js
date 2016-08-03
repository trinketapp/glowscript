var gulp   = require('gulp')
  , uglify = require('gulp-uglify')
  , concat = require('gulp-concat-util')
  , wrap   = require('gulp-wrap')
  , tap    = require('gulp-tap')
  , header = require('gulp-header')
  , gulpUtil = require('gulp-util')
  , path   = require('path')
  , version
  , glowscript_libraries;

version = '2.1.1';

glowscript_libraries = {
  "glow": [
    "lib/jquery/2.1/jquery.mousewheel.js",
    "lib/flot/jquery.flot.min.js",
    "lib/flot/jquery.flot.crosshair_GS.js",
    "lib/glMatrix.js",
    "lib/webgl-utils.js",
    "lib/glow/property.js",
    "lib/glow/vectors.js",
    "lib/glow/mesh.js",
    "lib/glow/canvas.js",
    "lib/glow/orbital_camera.js",
    "lib/glow/autoscale.js",
    "lib/glow/WebGLRenderer.js",
    "lib/glow/graph.js",
    "lib/glow/color.js",
    "lib/glow/primitives.js",
    "lib/glow/poly2tri.js",
    "lib/glow/opentype.js",
    "lib/glow/extrude.js",
    "lib/glow/api_misc.js",
    "lib/glow/shaders.gen.js",
    "lib/transform-all.js"
  ],
  "compiler": [
    "lib/glow/opentype.js",
    "lib/compiler.js",
    "lib/papercomp.js",
    "lib/transform-all.js",
    "lib/coffee-script.js"
  ],
  "RSrun": [
    "lib/rapydscript/baselib.js",
    "lib/rapydscript/stdlib.js"
  ],
  "RScompiler": [
    "lib/glow/opentype.js",
    "lib/compiler.js",
    "lib/papercomp.js",
    "lib/transform-all.js",
    "lib/rapydscript/utils.js",
    "lib/rapydscript/ast.js",
    "lib/rapydscript/output.js",
    "lib/rapydscript/parse.js",
    "lib/rapydscript/baselib.js"
  ]
};

gulp.task('default', function() {
  var shaders = []
    , shader_key;

  gulp.src('./shaders/*.shader')
    .pipe(tap(function(file) {
      shader_key = path.basename(file.path, '.shader');
      file.contents = new Buffer('    ' + shader_key + ': ' + JSON.stringify(file.contents.toString()));
      return file;
    }))
    .pipe(concat('shaders.gen.js', { sep : ',\n' }))
    .pipe(wrap('Export({shaders: {\n<%= contents %>\n}});'))
    .pipe(gulp.dest('./lib/glow/'));

  Object.keys(glowscript_libraries).forEach(function(lib) {
    gulp.src(glowscript_libraries[lib])
      .pipe(uglify().on('error', gulpUtil.log))
      .pipe(concat(lib + '.' + version + '.min.js'))
      .pipe(header("/*This is a combined, compressed file.  Look at https://github.com/BruceSherwood/glowscript for source code and copyright information.*/"))
      .pipe(gulp.dest('./package/'));
  });
});
