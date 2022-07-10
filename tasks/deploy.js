const ghPages = require('gulp-gh-pages');

const deploy = () => {
    return $.gulp.src($.path.root)
    .pipe(ghPages());
}

module.exports = deploy;