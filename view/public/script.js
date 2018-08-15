const appOptions = {
  template: `<div>
                <h3>Welcome, User</h3>
                <place-order 
                  v-model="orderDescription"
                  @order="placeOrder"
                  :showNoOrderWarning="showNoOrderWarning" />
             </div>`,
  el: '#app',
  data: {
    orderDescription: '',
    showNoOrderWarning: false
  },
  methods: {
    placeOrder: placeOrderFunction
  },
  watch: {
    orderDescription () {
      if (this.orderDescription) this.showNoOrderWarning = false
    }
  }
}

Vue.component('place-order', placeOrderOptions)
const app = new Vue(appOptions)
