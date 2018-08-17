const placeOrderOptions = {
  template: `<div id="user-orders-management">
							 <div id="place-order-container">
							 	<div id="input-order-container">
                 <input type="text" placeholder="Place your order" @input="$emit('input', $event.target.value)">
								 <button @click="$emit('place-order')">place</button>
								</div>
								<div id="show-status-container">
                 <p v-if="showNoOrderWarning" id="no-order-warning">No order has been described</p>
								 <p v-if="showStatus" id="order-placement-status">{{ orderPlacementStatus }}</p>
								</div>
               </div>
              <a @click="$emit('view-orders')" id="user-view-orders-link">View Placed Orders</a>
             </div>`,
  props: ['showNoOrderWarning', 'showStatus', 'orderPlacementStatus']
}

const showPlacedOrdersOptions = {
  template: `<div id="show-orders-container">
              <ul>
                <li class="each-order" v-for="order of orders">{{ order.description }} 
                  <span>status: {{ order.status }}</span>
                </li>
              </ul>
             </div>`,
  props: ['orders']
}

const rootViewOptions = {
  template: `<div class="viewsOption">
              <ul>
                <li><router-link to="/runner">I am a runner</router-link></li>
                <li><router-link to="/user">I am a user</router-link></li>
              </ul>
            </div>`
}

const userViewOptions = {
  template: `<div class="user-view">
              <h3>Welcome, {{profile.name}}</h3>
              <p v-if="profile.currentOrder? profile.currentOrder.status!=='fulfilled' : false" id="current-order-display">current order: {{ profile.currentOrder.description }}</p>
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
  data () {
    return {
      orderDescription: '',
      showNoOrderWarning: false,
      showStatus: false,
      orderPlacementStatus: '',
      placedOrders: [],
      profile: {}
    }
  },
  methods: {
    placeOrder: placeOrderFunction,
    showOrders: showOrdersFunction,
    getStatus: getStatusFunction,
    assignOrder: assignOrderFunction,
    getUserProfile
  },
  watch: {
    orderDescription () {
      this.showStatus = false
      this.orderPlacementStatus = ''
      if (this.orderDescription) this.showNoOrderWarning = false
    }
  },
  beforeMount () {
    this.getUserProfile()
  }
}

const runnerViewOptions = {
  template: `<div class="runner-view">
              <h3>Welcome, {{ profile.name }}</h3>
              <div id="runner-view-orders-link-container">
                <a @click="showOrders">View Placed Orders</a>
                <a @click="getAssignments">Get My Assignments</a>
              </div>
              <assigned-order
                :order="assignedOrder" 
                :showAssignments="showAssignments" />
              <show-orders 
                v-if="!showAssignments"
                :orders="placedOrders"
                @assign-order="assignOrder" />
            </div>`,
  data () {
    return {
      placedOrders: [],
      assignedOrder: {},
      showAssignments: false,
      profile: {}
    }
  },
  methods: {
    showOrders: showOrdersFunction,
    getAssignments: getAssignmentsFunction,
    getRunnerProfile
  },
  beforeMount () {
    this.getRunnerProfile()
  }
}

const showAssignedOrderOptions = {
  template: `<div id="render-assignments-container">
              <p v-if="showAssignments">{{ order.description }} <span>status: {{ order.status }}</span><button v-if="order.status!=='fulfilled'" @click="fulfillOrder">Mark as fulfilled</button></p>
             </div>`,
  props: ['order', 'showAssignments'],
  methods: {
    fulfillOrder
  }
}
