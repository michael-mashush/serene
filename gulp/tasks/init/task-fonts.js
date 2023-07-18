import gulp      from 'gulp'
import ttf2woff  from 'gulp-ttf2woff'
import ttf2woff2 from 'gulp-ttf2woff2'

import { paths } from '../../config/paths.js'

export function task_fonts_ttf() {
    return gulp
        .src(paths.source.assets.fonts)
        .pipe(gulp.dest(paths.build.assets.fonts))
}

export function task_fonts_woff() {
    return gulp
        .src(paths.source.assets.fonts)
        .pipe(ttf2woff())
        .pipe(gulp.dest(paths.build.assets.fonts))
}

export function task_fonts_woff2() {
    return gulp
        .src(paths.source.assets.fonts)
        .pipe(ttf2woff2())
        .pipe(gulp.dest(paths.build.assets.fonts))
}