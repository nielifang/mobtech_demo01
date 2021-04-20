import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import leftMenuRouter from './modules/leftMenu';
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    ...leftMenuRouter,
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
