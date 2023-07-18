import gulp        from 'gulp'
import browserSync from 'browser-sync'

import { paths } from '../../config/paths.js'

export function task_server() {
    browserSync.init({
        server: {
            baseDir: paths.build.html,
        },
        port: 4000,
        notify: false,
        browser: 'chrome'
    })
}