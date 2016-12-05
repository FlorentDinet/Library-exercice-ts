var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/*.html']
};
var browserSync = require('browser-sync');

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/app.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

//init reload brower
var reload = browserSync.reload;

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        port: 8066,
        server: {
            baseDir: "./dist", //base
            index: "index.html" //fichier a charger
        }
    });
});

// reload a server
gulp.task('browser-reload', function (){
  reload({stream:true});
});

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"))
        .pipe(reload({stream:true}));
}

gulp.task("default", ['copy-html','browser-sync'], function() {
    bundle();
});
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);