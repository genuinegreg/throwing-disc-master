import '///dev.jspm.io/angular';
import '///dev.jspm.io/@uirouter/angularjs'

import debug from '///dev.jspm.io/debug';

const log = debug('tdm');

import {main} from '/components/main/main.js'

export const rootModule = angular.module('root', ['ui.router', main.name]);

log('main module initialized')