import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(() => {})
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myspace',
    name: 'myspace',
    component: () => import('../views/MySpace/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mydemo',
    name: 'Mydemo',
    component: () => import('../views/MyDemo/index.vue'),
    meta: { name: '首页', keepAlive: true },
    children: [
      {
        path: '',
        name: 'Default',
        component: () => import('@/views/MyDemo/default.vue'),
        hidden: true,
        meta: {
          keepAlive: true,
          name: '首页'
        }
      },
      {
        path: 'gridlayout',
        name: 'Gridlayout',
        component: () => import('../views/MyDemo/GridLayout/index.vue'),
        meta: { name: '栅格布局', keepAlive: true }
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('../views/MyDemo/test/index.vue'),
        meta: { name: '测试', keepAlive: true }
      },
      {
        path: 'drag_label',
        name: 'dragLabel',
        component: () => import('../views/MyDemo/dragLabel/index.vue'),
        meta: { name: '拖拽API', keepAlive: true }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
