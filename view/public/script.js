const appOptions = {
  template: `<div>
                <h3>Welcome, User</h3>
                <place-order />
             </div>`,
  el: '#app'
}

Vue.component('place-order', placeOrderOptions)
const app = new Vue(appOptions)
