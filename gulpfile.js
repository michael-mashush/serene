import gulp from 'gulp'

import { paths } from './gulp/config/paths.js'

import { task_server }                                       from './gulp/tasks/server/task-server.js'
import { task_reset }                                        from './gulp/tasks/init/task-reset.js'
import { task_fonts_ttf, task_fonts_woff, task_fonts_woff2 } from './gulp/tasks/init/task-fonts.js'
import { task_icons }                                        from './gulp/tasks/init/task-icons.js'
import { task_images }                                       from './gulp/tasks/init/task-images.js'
import { task_videos }                                       from './gulp/tasks/init/task-videos.js'
import { task_audios }                                       from './gulp/tasks/init/task-audios.js'
import { task_html }                                         from './gulp/tasks/main/task-html.js'
import { task_scss }                                         from './gulp/tasks/main/task-scss.js'
import { task_js }                                           from './gulp/tasks/main/task-js.js'

export const IS_PROD_MODE = process.argv.includes('--production')
export const IS_DEV_MODE  = process.argv.includes('--development')

function watcher() {
    gulp.watch(paths.watch.html,  task_html)
    gulp.watch(paths.watch.scss,  task_scss)
    gulp.watch(paths.watch.js,    task_js)
}

const init_tasks = gulp.series(
    task_reset,
    gulp.parallel(
        task_fonts_ttf,
        task_fonts_woff,
        task_fonts_woff2,
    ),
    gulp.parallel(
        task_icons,
        task_images,
        task_videos,
        task_audios
    )
)

const main_tasks = gulp.series(
    task_html,
    task_scss,
    task_js,
)

const server_tasks = gulp.parallel(
    watcher,
    task_server
)

gulp.task('default', gulp.series(
    init_tasks,
    main_tasks,
    server_tasks
))