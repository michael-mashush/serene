import gulp from 'gulp'

import { paths } from '../../config/paths.js'

export function task_icons() {
    return gulp
        .src(paths.source.assets.icons)
        .pipe(gulp.dest(paths.build.assets.icons))
}