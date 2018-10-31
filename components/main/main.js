import debug from '///dev.jspm.io/debug';
import {levels} from '../levels/levels.js'
import {data} from '/data.js'


const log = debug('tdm:main')


export const main = angular.module('main', [levels.name])

class MainController {
    constructor() {

        log('MainController loaded')
        this.data = data;
    }
}

main.component(main.name, {
    templateUrl: '/components/main/main.html',
    controller: MainController
})


main.config(function ($stateProvider) {

    log('$stateProvider', $stateProvider)

    $stateProvider.state({
        name: 'main',
        url: '',
        abstract: true,
        component: main.name
    })
})
