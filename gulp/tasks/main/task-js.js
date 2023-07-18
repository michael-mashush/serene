import gulp          from 'gulp'
import webpackStream from 'webpack-stream'
import browserSync   from 'browser-sync'

import { paths }        from '../../config/paths.js'
import { IS_PROD_MODE } from '../../../gulpfile.js'

export function task_js() {
    return gulp
        .src(paths.source.js)
        .pipe(webpackStream({
            mode: IS_PROD_MODE ? 'production' : 'development',
            output: {
                filename: 'index.min.js'
            },
        }))
        .pipe(gulp.dest(paths.build.js))
        .pipe(browserSync.stream())
}