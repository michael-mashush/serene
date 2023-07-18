import gulp from 'gulp'

import { paths } from '../../config/paths.js'

export function task_audios() {
    return gulp
        .src(paths.source.assets.audios)
        .pipe(gulp.dest(paths.build.assets.audios))
}