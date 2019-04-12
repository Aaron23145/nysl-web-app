import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('./views/Loading.vue'),
    },
    {
      path: '/error/network',
      name: 'errorNetwork',
      component: () => import('./views/ErrorNetwork.vue'),
    },
    {
      path: '/teams',
      name: 'teamList',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Teams',
          pathName: 'teamList',
        },
      },
      component: () => import('./views/Teams/TeamList.vue'),
    },
    {
      path: '/teams/:team/next',
      name: 'teamNext',
      props: {
        viewInfo: {
          depth: 1,
          displayedName: 'Next',
          pathName: 'teamNext',
        },
      },
      component: () => import('./views/Teams/TeamNext.vue'),
    },
    {
      path: '/teams/:team/next/list',
      name: 'teamNextList',
      props: {
        viewInfo: {
          depth: 2,
          displayedName: 'List',
          pathName: 'teamNextList',
        },
      },
      component: () => import('./views/Teams/TeamNextList.vue'),
    },
    {
      path: '/teams/:team/next/list/:game_index',
      name: 'teamNextListGame',
      props: {
        viewInfo: {
          depth: 3,
          displayedName: 'Game',
          pathName: 'teamNextListGame',
        },
      },
      component: () => import('./views/Teams/TeamNextListGame.vue'),
    },
    {
      path: '/days',
      name: 'dayList',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Days',
          pathName: 'dayList',
        },
      },
      component: () => import('./views/Days/DayList.vue'),
    },
    {
      path: '/days/:date',
      name: 'daySelect',
      props: {
        viewInfo: {
          depth: 1,
          displayedName: 'Select',
          pathName: 'daySelect',
        },
      },
      component: () => import('./views/Days/DaySelect.vue'),
    },
    {
      path: '/days/:date/:game_index',
      name: 'dayNext',
      props: {
        viewInfo: {
          depth: 1,
          displayedName: 'Select',
          pathName: 'dayNext',
        },
      },
      component: () => import('./views/Days/DayNext.vue'),
    },
    {
      path: '/locations',
      name: 'locationList',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Locations',
          pathName: 'locationList',
        },
      },
      component: () => import('./views/Locations/LocationList.vue'),
    },
    {
      path: '/locations/:location/next',
      name: 'locationNext',
      props: {
        viewInfo: {
          depth: 1,
          displayedName: 'Next',
          pathName: 'locationNext',
        },
      },
      component: () => import('./views/Locations/LocationNext.vue'),
    },
    {
      path: '/locations/:location/next/list',
      name: 'locationNextList',
      props: {
        viewInfo: {
          depth: 2,
          displayedName: 'List',
          pathName: 'locationNextList',
        },
      },
      component: () => import('./views/Locations/LocationNextList.vue'),
    },
    {
      path: '/locations/:location/next/list/:game_index',
      name: 'locationNextListGame',
      props: {
        viewInfo: {
          depth: 3,
          displayedName: 'Game',
          pathName: 'locationNextListGame',
        },
      },
      component: () => import('./views/Locations/LocationNextListGame.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Chat',
          pathName: 'chat',
        },
      },
      component: () => import('./views/Chat.vue'),
    },
    {
      path: '/login',
      name: 'login',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Login',
          pathName: 'login',
        },
      },
      component: () => import('./views/TheLogin.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Sign up',
          pathName: 'signup',
        },
        component: () => import('./views/TheSignup.vue'),
      },
    },
    {
      path: '/help',
      name: 'help',
      props: {
        viewInfo: {
          depth: 0,
          displayedName: 'Help',
          pathName: 'help',
        },
      },
      component: () => import('./views/Help.vue'),
    },
  ],
});
