Vue.component('place-order', placeOrderOptions)
Vue.component('show-orders', showPlacedOrdersOptions)
const rootView = Vue.component('root-view', rootViewOptions)
const userView = Vue.component('user-view', userViewOptions)
const runnerView = Vue.component('runner-view', runnerViewOptions)
Vue.component = Vue.component('assigned-order', showAssignedOrderOptions)

const router = new VueRouter({
  routes: [
    { path: '/runner', component: runnerView },
    { path: '/user', component: userView },
    { path: '/', component: rootView }
  ]
})

const appOptions = {
  template: `<div>
                <router-view></router-view>
             </div>`,
  el: '#app',
  router
}

const app = new Vue(appOptions)
