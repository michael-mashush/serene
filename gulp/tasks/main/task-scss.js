import gulp                 from 'gulp'
import sassCompiler         from 'sass'
import gulpSass             from 'gulp-sass'
import rename               from 'gulp-rename'
import cleanCss             from 'gulp-clean-css'
import autoPrefixer         from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import gulpIf               from 'gulp-if'
import browserSync          from 'browser-sync'

import { paths }        from '../../config/paths.js'
import { IS_PROD_MODE } from '../../../gulpfile.js'

const sass = gulpSass(sassCompiler)

export function task_scss() {
    return gulp
        .src(paths.source.scss)
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(groupCssMediaQueries())
        .pipe(autoPrefixer({
            remove: true,
            grid: true,
        }))
        .pipe(gulpIf(
            IS_PROD_MODE,
            cleanCss(),
        ))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(paths.build.css))
        .pipe(browserSync.stream())
}