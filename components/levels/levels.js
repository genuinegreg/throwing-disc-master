import debug from '///dev.jspm.io/debug';
import {data} from '/data.js'


const log = debug('tdm.levels')


export const levels = angular.module('levels', [])

levels.component(levels.name, {
    templateUrl: '/components/levels/levels.html',
    controller: class MainController {
        constructor() {
            this.levels = data
        }
    }
})