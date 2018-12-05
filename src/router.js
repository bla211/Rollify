import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import PersonalData from './views/PersonalData.vue'
import OriginPlan from './views/OriginPlan.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccount
    },
    {
      path: '/personal-data',
      name: 'personal-data',
      component: PersonalData
    },
    {
      path: '/origin-plan',
      name: 'origin-plan',
      component: OriginPlan
    },
  ]
})
