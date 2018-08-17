Vue.component('place-order', placeOrderOptions)
Vue.component('show-orders', showPlacedOrdersOptions)
const rootView = Vue.component('root-view', rootViewOptions)
const userView = Vue.component('user-view', userViewOptions)
const runnerView = Vue.component('runner-view', runnerViewOptions)
Vue.component('assigned-order', showAssignedOrderOptions)

const router = new VueRouter({
  routes: [
    { path: '/runner', component: runnerView },
    { path: '/user', component: userView },
    { path: '/', component: rootView }
  ]
})

const appOptions = {
  template:`<router-view></router-view>`,
  el: '#app',
  router
}

const app = new Vue(appOptions)
