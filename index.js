import '///dev.jspm.io/angular';
import '///dev.jspm.io/@uirouter/angularjs'
import ngMaterial from '///dev.jspm.io/angular-material'
import ngAnimate from '///dev.jspm.io/angular-animate'
import ngAria from '///dev.jspm.io/angular-aria'
import ngMessages from '///dev.jspm.io/angular-messages'

import debug from '///dev.jspm.io/debug';

const log = debug('tdm');
log('initializing...', ngMaterial)

import {main} from '/components/main/main.js'

export const rootModule = angular.module('root', [
    'ui.router',
    ngMaterial,
    ngAnimate,
    ngAria,
    ngMessages,
    main.name
]);

log('main module initialized')