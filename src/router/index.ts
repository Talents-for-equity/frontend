import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import RegistrationForm from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import Preregistration from '../views/Preregistration.vue'
import MapView from '../views/MapView.vue'
import Prototype from '../views/Prototype.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: MapView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationForm
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/mapview',
    name: 'MapView',
    component: MapView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/preregistration',
    name: 'Preregistration',
    component: Preregistration
  },
  {
    path: '/prototype',
    name: 'Prototype',
    component: Prototype
  }
]

const router = new VueRouter({
  routes
})

export default router
