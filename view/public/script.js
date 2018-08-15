const appOptions = {
  template: `<div>
                <h3>Welcome, User</h3>
                <place-order 
                  v-model="orderDescription"
                  @place-order="placeOrder"
                  :showNoOrderWarning="showNoOrderWarning"
                  :showStatus="showStatus"
                  :orderPlacementStatus="orderPlacementStatus"
                  @view-orders="showOrders" />
             </div>`,
  el: '#app',
  data: {
    orderDescription: '',
    showNoOrderWarning: false,
    showStatus: false,
    orderPlacementStatus: ''
  },
  methods: {
    placeOrder: placeOrderFunction,
    showOrders: showOrdersFunction,
    getStatus: getStatusFunction
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
const app = new Vue(appOptions)
