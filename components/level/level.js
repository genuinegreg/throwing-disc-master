import debug from '///dev.jspm.io/debug';
import {data} from '/data.js'


const log = debug('tdm.level')


export const level = angular.module('level', [])

level.component(level.name, {
    templateUrl: '/components/level/level.html',
    controller: class MainController {
        constructor() {
            this.level = data
        }
    }
})



level.config(function ($stateProvider) {

    log('$stateProviderr', $stateProvider)

    $stateProvider.state({
        name: 'main.levels.level',
        url: '{levelId}',
        component: level.name
    })
})