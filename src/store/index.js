import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autoEnrollRequested: true,
    bannerData:[
      "Your're almost done. Check your email to complete your enrollment and access your rewards online",
      "Every time you shop in stores and online, use your registered phone number to earn rewards. You can now access your rewards online."
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
