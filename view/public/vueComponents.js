const placeOrderOptions = {
  template: `<div>
               <div>
                 <input type="text" placeholder="Place your order" @input="$emit('input', $event.target.value)">
                 <p v-if="showNoOrderWarning">No order has been described</p>
                 <button @click="$emit('place-order')">place</button>
                 <p v-if="showStatus">{{ orderPlacementStatus }}</p>
               </div>
              <a @click="$emit('view-orders')">View Placed Orders</a>
             </div>`,
  props: ['showNoOrderWarning', 'showStatus', 'orderPlacementStatus']
}

const showPlacedOrdersOptions = {
  template: `<div>
              <ul>
                <li v-for="order of orders">{{ order.description }} <span>status: {{ order.status }}</span><button v-if="$route.path === '/runner'" @click="$emit('assign-order', order)">Assign</button></li>
              </ul>
             </div>`,
  props: ['orders']
}

const rootViewOptions = {
  template: `<div>
              <ul>
                <li><router-link to="/runner">I am a runner</router-link></li>
                <li><router-link to="/user">I am a user</router-link></li>
              </ul>
            </div>`
}

const userViewOptions = {
  template: `<div>
              <h3>Welcome, User</h3>
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

const runnerViewOptions = {
  template: `<div>
              <h3>Welcome, {{ profile.name }}</h3>
              <a @click="showOrders">View Placed Orders</a>
              <a @click="getAssignments">Get My Assignments</a>
              <assigned-order
                :order="assignedOrder" 
                :showAssignments="showAssignments" />
              <show-orders 
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
    assignOrder: assignOrderFunction,
    getAssignments: getAssignmentsFunction,
    getRunnerProfile
  },
  beforeMount () {
    this.getRunnerProfile()
  }
}

const showAssignedOrderOptions = {
  template: `<div>
              <p v-if="showAssignments">{{ order.description }} <span>status: {{ order.status }}</span><button>Mark as fulfilled</button></p>
             </div>`,
  props: ['order', 'showAssignments']
}
