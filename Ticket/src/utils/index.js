/*
Created by wu529778790 on 2017/11/9
 */

let defaultUtil = require('./default')

let Utils = function () {}

let install = function (Vue, options) {
  Vue.prototype.$utils = Object.assign(new Utils(), defaultUtil)
}
module.exports = install
