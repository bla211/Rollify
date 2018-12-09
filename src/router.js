import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import PersonalData from './views/PersonalData.vue'
import ConfirmOriginPlan from './views/ConfirmOriginPlan.vue'
import SearchDestinationPlan from './views/SearchDestinationPlan.vue'
import ConfirmDestinationPlan from './views/ConfirmDestinationPlan.vue'
import SignOff from './views/SignOff.vue'
import Success from './views/Success.vue'
import Dashboard from './views/Dashboard.vue'

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
      path: '/confirm-origin-plan',
      name: 'confirmorigin-plan',
      component: ConfirmOriginPlan
    },
    {
      path: '/search-destination-plan',
      name: 'search-destination-plan',
      component: SearchDestinationPlan
    },
    {
      path: '/confirm-destination-plan',
      name: 'confirm-destination-plan',
      component: ConfirmDestinationPlan
    },
    {
      path: '/sign-off',
      name: 'sign-off',
      component: SignOff
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})
