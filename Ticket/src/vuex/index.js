import Vue from 'vue'
import Vuex from 'vuex'
import * as Type from '@/vuex/types.js'
Vue.use(Vuex)
/**
 * check value type
 * @param  {String}  type
 * @param  {*}  val
 * @return {Boolean}
 */
// function is (type, val) {
//   return Object.prototype.toString.call(val) === ('[object ' + type + ']')
// }
/**
 * 存入local数据
 * @param {String} key 键名
 * @param {*} value 要存入的数据
 * @param {Number} exp 过期时间，单位：秒
 */
function setLocalStorage (key, value, exp) {
  try {
    if (exp && typeof exp === 'number') {
      let expDate = new Date()
      expDate.setSeconds(exp)
      localStorage[key] = JSON.stringify({
        data: value,
        time: expDate.getTime()
      })
    } else {
      localStorage[key] = value instanceof Object ? JSON.stringify(value) : value
    }
    return true
  } catch (e) {
    alert('您的web浏览器不支持本地存储设置。在Safari中，最常见的原因是使用“私人浏览模式”或“无痕浏览”。有些设置可能无法保存或某些功能可能无法正常工作。')
    return false
  }
}
/**
 * 获取local数据
 * @param {String} key 键名
 * @param {Number} exp 过期时间（是否超过此时间）
 * @param {Boolean} force 是否强制删除已过期数据，true：已过期数据返回空
 * @return {*} 存在 exp : {data: value, time: 过期时间, expire: 是否过期} , 不存在 exp ： 原路返回
 */
// function getLocalStorage (key, exp, force) {
//   try {
//     let local = JSON.parse(localStorage[key])
//     if (exp && typeof exp === 'number' && local && is('Object', local) && local.time) {
//       local.expire = new Date().getTime() - local.time > exp * 1000
//       if (force && local.expire) {
//         return null
//       }
//     }
//     return local
//   } catch (e) {
//     console.warn('LocalStorage.Parse:', '[key:', key, ']', e.message)
//     return localStorage[key]
//   }
// }
const store = new Vuex.Store({
  state: {
    apis: null
  },
  getters: {
    apis: state => {
      state.apis = JSON.parse(localStorage.apis)
    }
  },
  mutations: {
    /**
     * 更新本地用户缓存
     */
    [Type.UPDATE_LOCALSTORAGE]: (state, data) => {
      setLocalStorage('apis', (state.apis = data))
    }
  },
  actions: {
    /**
     * @param {Store*} commit
     * @param {Object} data
     */
    [Type.UPDATE_LOCALSTORAGE] ({ commit }, data) {
      commit(Type.UPDATE_LOCALSTORAGE, data)
    }
  }
})
export default store
// window.addEventListener('storage', this.store.dispatch(Types.UPDATE_LOCALSTORAGE, localStorage.apis)
