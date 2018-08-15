const placeOrderOptions = {
  template: `<div>
                <input type="text" placeholder="Place your order" @input="$emit('input', $event.target.value)">
                <p v-if="showNoOrderWarning">No order has been described</p>
                <button @click="$emit('order')">place</button>
             </div>`,
  props: ['showNoOrderWarning']
}
