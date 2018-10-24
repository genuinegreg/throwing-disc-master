import debug from '///dev.jspm.io/debug';
import {data} from '/data.js'


const log = debug('tdm.level')


export const levels = angular.module('levels', [])

levels.component(levels.name, {
    templateUrl: '/components/level/level.html',
    controller: class MainController {
        constructor() {
            this.levels = data
        }
    }
})