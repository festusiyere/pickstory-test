import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import images from './images'
import loader from './loader'
import list from './list'

export default new Vuex.Store({
  modules: {
    images,
    loader,
    list
  }
})
