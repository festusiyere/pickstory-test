export default {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    get(state) {
      return state.list
    }
  },

  mutations: {
    set(state, image) {
      if (!state.list.includes(image)) {
        state.list.push(image)
      } else {
        const imgIndex = state.list.indexOf(image)
        state.list.splice(imgIndex, 1)
      }
    }
  }
}
