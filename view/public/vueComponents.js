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
