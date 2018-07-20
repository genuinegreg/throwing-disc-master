export const main = angular.module('main', [])

import {data} from '/data.js'

class MainController {
  constructor() {
    this.data = data;
  }
}

main.component(main.name, {
  templateUrl: '/components/main/main.html',
  controller: MainController
})