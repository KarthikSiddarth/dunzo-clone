Vue.component('place-order', placeOrderOptions)
Vue.component('show-orders', showPlacedOrdersOptions)
const userView = Vue.component('user-view', userViewOptions)
const runnerView = Vue.component('runner-vue', runnerViewOptions)

const router = new VueRouter({
  routes: [
    { path: '/runner', component: runnerView },
    { path: '/', component: userView }
  ]
})

const appOptions = {
  template: `<div>
                <ul>
                  <li><router-link to="/runner">show runner screen</router-link></li>
                  <li><router-link to="/">show user screen</router-link></li>
                </ul>
                <router-view></router-view>
             </div>`,
  el: '#app',
  router
}

const app = new Vue(appOptions)
