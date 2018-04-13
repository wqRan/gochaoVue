import Vue from 'vue'
import Router from 'vue-router'

import IndexCmpt from '@/components/Index'
import LoginCmpt from '@/components/Login'
import ResgiterCmpt from '@/components/Resgiter'
import DetailCmpt from '@/components/Detail'
import CommondityCmpt from '@/components/Commondity'
import ShopcarCmpt from '@/components/Shopcar'
import SearchCmpt from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexCmpt
    },
    {
      path: '/login',
      name: 'login',
      component: LoginCmpt
    },
    {
      path: '/resgiter',
      name: 'eesgiter',
      component: ResgiterCmpt
    },
    {
      path: '/detail/:id/:text',
      name: 'detail',
      component: DetailCmpt
    },
    {
      path: '/commondity/:id',
      name: 'commondity',
      component: CommondityCmpt
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ShopcarCmpt,
      meta:{requiresAuth:true}
    },
    {
      path: '/search/:id',
      name: 'search',
      component: SearchCmpt
    }
  ]
})
