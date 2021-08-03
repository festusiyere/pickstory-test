export default class {
  constructor(args) {
    this.axios = args.$axios
  }

  getAllImages(page = 2, limit = 1000) {
    // Setting page and limit as query param
    return this.axios.get('list', {params: {page, limit}})
  }
}
