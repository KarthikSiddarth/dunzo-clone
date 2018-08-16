const appOptions = {
  el: '#app',
  data: {
    orderDescription: '',
    showNoOrderWarning: false,
    showStatus: false,
    orderPlacementStatus: '',
    placedOrders: []
  },
  methods: {
    placeOrder: placeOrderFunction,
    showOrders: showOrdersFunction,
    getStatus: getStatusFunction,
  },
  watch: {
    orderDescription () {
      this.showStatus = false
      this.orderPlacementStatus = ''
      if (this.orderDescription) this.showNoOrderWarning = false
    }
  }
}

Vue.component('place-order', placeOrderOptions)
Vue.component('show-orders', showPlacedOrdersOptions)
const app = new Vue(appOptions)
