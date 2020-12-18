import Vue from 'vue'
import Vuex from 'vuex'
import { mockData } from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autoEnrollStatus: mockData.loyaltyAccountLookupResponse.autoEnrollmentStatus,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
