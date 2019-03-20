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
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Teams',
          pathName: 'teamList'
        }
      },
      component: () => import('./views/Teams/TeamList.vue')
    },
    {
      path: '/days',
      name: 'dayList',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Days',
          pathName: 'dayList'
        }
      },
      component: () => import('./views/Days/DayList.vue')
    },
    {
      path: '/locations',
      name: 'locationList',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Locations',
          pathName: 'locationList'
        }
      },
      component: () => import('./views/Locations/LocationList.vue')
    }
  ]
})
