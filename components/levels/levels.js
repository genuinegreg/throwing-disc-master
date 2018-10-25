import debug from '///dev.jspm.io/debug';
import {level} from '../level/level.js'
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


levels.config(function ($stateProvider, $urlRouterProvider) {

    log('$stateProviderr', $stateProvider)

    $stateProvider.state({
        name: 'main.levels',
        url: 'levels',
        component: levels.name
    })


    $urlRouterProvider.otherwise('/levels')
})