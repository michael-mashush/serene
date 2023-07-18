import gulp from 'gulp'

import { paths } from '../../config/paths.js'

export function task_videos() {
    return gulp
        .src(paths.source.assets.videos)
        .pipe(gulp.dest(paths.build.assets.videos))
}