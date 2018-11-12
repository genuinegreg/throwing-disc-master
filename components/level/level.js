import debug from '///dev.jspm.io/debug';


const log = debug('tdm:levels:level')
log('loaded...')

export const level = angular.module('level', [])

level.component(level.name, {
    templateUrl: '/components/level/level.html',
    bindings: {
        level: '<'
    },
    controller: class MainController {
        constructor($scope) {
        }
    }
})


level.config(function ($stateProvider) {

    log('$stateProvider', $stateProvider)

    $stateProvider.state({
        name: 'main.levels.level',
        url: '/{levelId}',
        component: level.name,
        resolve: {
            level: function (levels, $stateParams) {
                return levels.find((level) => level.title === $stateParams.levelId)

            }

        }
    })
})