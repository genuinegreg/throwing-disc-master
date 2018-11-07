import debug from '///dev.jspm.io/debug';
import {level} from '../level/level.js'
import {data} from '/data/index.js'


const log = debug('tdm:levels')
log('loaded...')

export const levels = angular.module('levels', [level.name])

levels.component(levels.name, {
    templateUrl: '/components/levels/levels.html',
    bindings: {
        levels: '<'
    },
    controller: class MainController {
        constructor($scope, $state) {
            log('$scope', $scope)
            log('$state', $state)
            log(this.levels)
        }
    }
})


levels.config(function ($stateProvider, $urlRouterProvider) {

    log('$stateProvider', $stateProvider)

    $stateProvider.state({
        name: 'main.levels',
        url: '/levels',
        component: levels.name,
        resolve: {
            levels: function (dataService) {
                return dataService.getLevels()
            }

        }
    })


    $urlRouterProvider.otherwise('/levels')
})