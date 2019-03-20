import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('./views/Loading.vue')
    },
    {
      path: '/error/network',
      name: 'errorNetwork',
      component: () => import('./views/ErrorNetwork.vue')
    },
    {
      path: '/teams',
      name: 'teamList',
      component: () => import('./views/TeamList.vue')
    },
    {
      path: '/days',
      name: 'dayList',
      component: () => import('./views/DayList.vue')
    },
    {
      path: '/locations',
      name: 'locationList',
      component: () => import('./views/LocationList.vue')
    }
  ]
})
