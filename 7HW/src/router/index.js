import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: "Dashboard",
    component: () => import( /* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },

  // {
  //   path: '/dashboard/:page', //динамический путь
  //   name: "Dashboard",
  //   component: Dashboard
  // },
  {
    path: '/about',
    name: "About",
    component: () => import( /* webpackChunkName: "About" */ "../views/About.vue"),
  },
  {
    path: '/add/payment/:category',
    name: 'AddNewPayments',
    component: () => import( /* webpackChunkName: "AddPaymentForm" */ "../components/AddPaymentForm.vue"),
  },


  {
    path: '/notfound',
    name: "NotFound",
    component: () => import( /* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
  {
    path: '*',
    component: () => import( /* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

////////////////////////////////
// const userIaAuth = true

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'NotFound' && !userIaAuth) {
//     next({
//       name: "NotFound"
//     })
//   } else {
//     next()
//   }
// })

const getTitleByRoutes = routeName => {
  return {
    'Dashboard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'NotFound': 'Oops! Seems like we lost this page :('
  }[routeName]
}

router.afterEach((to) => {
  document.title = getTitleByRoutes(to.name)

})
export default router
