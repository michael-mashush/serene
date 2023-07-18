import { deleteAsync } from 'del'

import { paths } from '../../config/paths.js'

export function task_reset() {
    return deleteAsync(paths.buildFolder)
}