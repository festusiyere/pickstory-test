export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  getters: {
    get(state) {
      return state.isLoading
    }
  },

  mutations: {
    set(store, isLoading) {
      store.isLoading = isLoading
    }
  }
}
