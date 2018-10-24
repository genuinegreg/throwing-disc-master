import '///dev.jspm.io/angular';
import '///dev.jspm.io/@uirouter/angularjs'

import {main} from '/components/main/main.js'

export const rootModule = angular.module('root', ['ui.router', main.name]);