import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

import mainModule from './modules/main';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    store: mainModule,
  },
  modules:{
    module: mainModule,
  }
})
