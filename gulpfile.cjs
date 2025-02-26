const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

// Paths
const paths = {
  scripts: {
    src: "js/main/main.js",
    dest: "js/",
  },
};

// Minify JS with sourcemaps
function minifyScripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(
      rename({
        basename: "scripts",
        suffix: ".min",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Watch for changes
function watchFiles() {
  gulp.watch(paths.scripts.src, minifyScripts);
}

// Default task
exports.default = gulp.series(minifyScripts, watchFiles);
