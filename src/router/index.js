import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/List'
import detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: list
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})