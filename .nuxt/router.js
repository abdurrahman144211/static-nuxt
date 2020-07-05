import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c961161 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _66a283ea = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _57c8e58e = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _64ebe2a2 = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _e76427b4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6c961161,
    name: "about"
  }, {
    path: "/posts",
    component: _66a283ea,
    name: "posts"
  }, {
    path: "/team",
    component: _57c8e58e,
    name: "team"
  }, {
    path: "/posts/:slug",
    component: _64ebe2a2,
    name: "posts-slug"
  }, {
    path: "/",
    component: _e76427b4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
