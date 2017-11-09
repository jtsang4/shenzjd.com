import Vue from 'vue'
import Router from 'vue-router'
import four from '@/components/four'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'four',
      component: four
    }
  ]
})
