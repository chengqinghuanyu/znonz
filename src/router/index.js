import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '../views/list'
import onlineOffline from '../views/onlineOffline'

import hoverAction from '../views/hoverAction'
import pdf from '../views/pdf'
import login from '../views/login'

import notice from '../views/notice'
import web from '../views/web'
import ztree from '../views/ztree'
import excel from '../views/excel';
import table from '../views/table';


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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/web',
      name: 'web',
      component: web
    },
    {
      path:'/ztree',
      name:'ztree',
      component:ztree
    },
    {
      path:'/excel',
      name:'excel',
      component:excel
    },
    {
      path:'/table',
      name:'table',
      component:table
    }
  ]
})
