import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeLayout from '@/layouts/Home.vue'
import HomeComponent from '@/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/',
    component: HomeLayout,
    children: [{path: 'home', name: 'home', component: HomeComponent}]
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})
