import {ImageService} from '@/services'

export default {
  namespaced: true,
  state: {
    isLoading: false,
    images: null
  },
  getters: {
    get(state) {
      return state.images
    }
  },

  mutations: {
    set(state, images) {
      state.images = images
    }
  },

  actions: {
    async fetchImages({commit}) {
      // Getting all images from server
      const result = await new ImageService(this._vm).getAllImages()
      //   mutating Store with result gotten
      commit('set', result.data)
    }
  }
}
