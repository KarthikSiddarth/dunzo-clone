const appOptions = {
  template: `<div>
                <h3>Welcome, User</h3>
                <place-order 
                  v-model="orderDescription"
                  @place-order="placeOrder"
                  :showNoOrderWarning="showNoOrderWarning"
                  @view-orders="showOrders" />
             </div>`,
  el: '#app',
  data: {
    orderDescription: '',
    showNoOrderWarning: false
  },
  methods: {
    placeOrder: placeOrderFunction,
    showOrders: showOrdersFunction
  },
  watch: {
    orderDescription () {
      if (this.orderDescription) this.showNoOrderWarning = false
    }
  }
}

Vue.component('place-order', placeOrderOptions)
const app = new Vue(appOptions)
