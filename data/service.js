import {data as levelsData} from './index.js'
import {data as _1_white} from './1_white.js'
import {data as _2_yellow} from './2_yellow.js'

const data = [
    _1_white,
    _2_yellow
]

export const dataService = angular.module('dataService', [])

dataService.factory(dataService.name, function () {

    class DataService {
        getLevels() {
            return levelsData;
        }

        getLevel(id) {
            return data['_' + id]
        }
    }

    return new DataService()
})