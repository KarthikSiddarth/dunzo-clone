const baseUrl = 'http://localhost:8000'
const runnerId = '5b73f30faf84a74dc0ef8adf'
const userId = '5b73f2faaf84a74dc0ef8ade'

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

function showOrdersFunction () {
  this.showAssignments = false
  let url
  if (this.$route.path === '/') {
    url = `${baseUrl}/api/orders/`
  } else if (this.$route.path === '/runner') {
    url = `${baseUrl}/api/orders/placed`
  }
  fetch(url).then(data => data.json()).then((orders) => { this.placedOrders = orders; console.log(orders) })
}

function getStatusFunction (response) {
  this.showStatus = true
  if (response.result.status) {
    this.orderPlacementStatus = 'your order is placed :)'
    return
  }
  this.orderPlacementStatus = 'your order did not get place :('
}

function assignOrderFunction (order) {
  const url = `${baseUrl}/api/runners/${runnerId}`
  let postAssignmentOptions = getPostAssignmentOptions(order)
  fetch(url, postAssignmentOptions).then(data => data.json()).then((res) => { console.log(res) })
}

function getPostAssignmentOptions (order) {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  }
}

function getAssignmentsFunction () {
  const url = `${baseUrl}/api/runners/${runnerId}`
  this.showAssignments = true
  fetch(url).then(data => data.json()).then(doc => { this.assignedOrder = doc.currentOrder })
}

async function getRunnerProfile () {
  const url = `${baseUrl}/api/runners/${runnerId}`
  this.profile = await (await fetch(url)).json()
}

async function getUserProfile () {
  const url = `${baseUrl}/api/users/${userId}`
  this.profile = await (await fetch(url)).json()
}
