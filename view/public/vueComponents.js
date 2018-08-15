const placeOrderOptions = {
  template: `<div>
               <div>
                 <input type="text" placeholder="Place your order" @input="$emit('input', $event.target.value)">
                 <p v-if="showNoOrderWarning">No order has been described</p>
                 <button @click="$emit('place-order')">place</button>
                 <p v-if="showStatus">{{ orderPlacementStatus }}</p>
               </div>
              <a @click="$emit('view-orders')">View My Orders</a>
             </div>`,
  props: ['showNoOrderWarning', 'showStatus', 'orderPlacementStatus']
}

const showPlacedOrdersOptions = {
  template: `<div>
              <ul>
                <li v-for="order of orders">{{ order.description }} <span>status {{ order.status }}</span></li>
              </ul>
             </div>`,
  props: ['orders']
}

const userViewOptions = {
  template: `<div>
              <place-order 
                v-model="orderDescription"
                @place-order="placeOrder"
                :showNoOrderWarning="showNoOrderWarning"
                :showStatus="showStatus"
                :orderPlacementStatus="orderPlacementStatus"
                @view-orders="showOrders" />
              <show-orders 
                :orders="placedOrders" />
            </div>`,
  data() { 
    return {
      orderDescription: '',
      showNoOrderWarning: false,
      showStatus: false,
      orderPlacementStatus: '',
      placedOrders: []
    }
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
