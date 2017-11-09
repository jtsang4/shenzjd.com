import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

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

  },
  actions: {

  }
})
export default store
