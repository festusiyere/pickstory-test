import axios from 'axios'

export const $axios = axios.create({
  // Base URL
  baseURL: 'https://picsum.photos/v2/',

  // Custom Headers
  headers: {
    'Content-Type': 'application/json'
  }
})
