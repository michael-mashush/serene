import gulp         from 'gulp'
import fileInclude  from 'gulp-file-include'
import htmlMin      from 'gulp-htmlmin'
import gulpIf       from 'gulp-if'
import browserSync  from 'browser-sync'

import { paths }        from '../../config/paths.js'
import { IS_PROD_MODE } from '../../../gulpfile.js'

export function task_html() {
    return gulp
        .src(paths.source.html)
        .pipe(fileInclude({
            indent: true
        }))
        .pipe(gulpIf(
            IS_PROD_MODE, 
            htmlMin({
                collapseWhitespace: true,
                removeComments: true,
                keepClosingSlash: true,
            }),
            htmlMin({
                collapseWhitespace: false,
                removeComments: false,
                keepClosingSlash: true,
            }),
        ))
        .pipe(gulp.dest(paths.build.html))
        .pipe(browserSync.stream())
}