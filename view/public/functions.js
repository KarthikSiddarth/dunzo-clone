const baseUrl = window.location.host

function getPostOrderOptions (orderDescription) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'description': orderDescription })
  }
}

function placeOrderFunction () {
  if (this.orderDescription) {
    const url = `${baseUrl}/api/orders`
    this.showNoOrderWarning = false
    let postOrderOptions = getPostOrderOptions(this.orderDescription)
    fetch(url, postOrderOptions)
      .then(data => data.json())
      .then(this.getStatus)
    return
  }
  this.showNoOrderWarning = true
}

async function showOrdersFunction () {
  this.showAssignments = false
  let url
  if (this.$route.path === '/user') {
    url = `${baseUrl}/api/orders/`
  } else if (this.$route.path === '/runner') {
    url = `${baseUrl}/api/orders/placed`
  }
  this.placedOrders = (await (await fetch(url)).json())
}

function getStatusFunction (response) {
  this.showStatus = true
  if (response.result.status) {
    this.orderPlacementStatus = 'your order is placed :)'
    this.assignOrder(response.result)
    this.getUserProfile()
    return
  }
  this.orderPlacementStatus = 'your order did not get place :('
}

async function assignOrderFunction (order) {
  const url = `${baseUrl}/api/runners/${runnerId}`
  let postAssignmentOptions = getPostAssignmentOptions(order)
  console.log((await fetch(url, postAssignmentOptions)).json())
}

function getPostAssignmentOptions (order) {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  }
}

async function showAssignedFunction () {
  this.showAssignments = true
}

async function getRunnerProfile () {
  const url = `${baseUrl}/api/runners/${runnerId}`
  this.profile = await (await fetch(url)).json()
}

async function getUserProfile () {
  const url = `${baseUrl}/api/users/${userId}`
  this.profile = await (await fetch(url)).json()
}

async function fulfillOrder () {
  const url = `${baseUrl}/api/orders/${this.order._id}`
  const order = {
    status: 'fulfilled'
  }
  const fetchOption = {
    method: 'PUT',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const updated = (await 
    (await fetch(url, fetchOption)).json()
  ).message === 'order updated'
  if (updated) {
    this.order.status = 'fulfilled'
  }
}
