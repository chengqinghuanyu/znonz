import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '../views/list'
import onlineOffline from '../views/onlineOffline'

import hoverAction from '../views/hoverAction'
import pdf from '../views/pdf'

import notice from '../views/notice'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/net',
      name: 'onlineOffline',
      component: onlineOffline
    },
    {
      path: '/hover',
      name: 'hoverAction',
      component: hoverAction
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: pdf
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    }
  ]
})
