import gulp from 'gulp'
import webp from 'gulp-webp'

import { paths } from '../../config/paths.js'

export function task_images() {
    return gulp
        .src(paths.source.assets.images)
        .pipe(gulp.dest(paths.build.assets.images))
        .pipe(webp())
        .pipe(gulp.dest(paths.build.assets.images))
}