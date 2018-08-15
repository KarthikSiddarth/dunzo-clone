const placeOrderOptions = {
  template: `<div>
                <div>
                  <input type="text" placeholder="Place your order" @input="$emit('input', $event.target.value)">
                  <p v-if="showNoOrderWarning">No order has been described</p>
                  <button @click="$emit('place-order')">place</button>
                </div>
                <a @click="$emit('view-orders')">View My Orders</a>
             </div>`,
  props: ['showNoOrderWarning']
}
