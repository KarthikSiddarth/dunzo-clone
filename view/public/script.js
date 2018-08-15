Vue.component('place-order', placeOrderOptions)
Vue.component('show-orders', showPlacedOrdersOptions)
const userView = Vue.component('user-view', userViewOptions)
const runnerView = Vue.component('runner-vue', {template: `<div>I am a runner</div>`})

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
                <h3>Welcome, User</h3>
                <router-view></router-view>
             </div>`,
  el: '#app',
  router
}

const app = new Vue(appOptions)
