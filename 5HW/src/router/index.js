import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

import AddNewPayments from '../views/AddNewPayments.vue'

import AddPaymentForm from '../components/AddPaymentForm.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: "Dashboard",
    component: Dashboard
  },

  // {
  //   path: '/dashboard/:page', //динамический путь
  //   name: "Dashboard",
  //   component: Dashboard
  // },
  {
    path: '/about',
    name: "About",
    component: About
  },
  {
    path: '/add/payment/:category',
    name: 'AddNewPayments',
    component: AddNewPayments
  },

  // {
  //   path: '/add/payment/:category',
  //   name: 'AddNewPayments',
  //   component: AddNewPayments
  // },


  {
    path: '/notfound',
    name: "NotFound",
    component: NotFound
  },
  {
    path: '*',
    redirect: '/notfound'
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
