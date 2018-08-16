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
    const url = 'http://localhost:8000/api/orders'
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
    url = 'http://localhost:8000/api/orders/'
  } else if (this.$route.path === '/runner') {
    url = 'http://localhost:8000/api/orders/placed'
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
  const url = 'http://localhost:8000/api/runners/5b73f30faf84a74dc0ef8adf'
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
  const url = 'http://localhost:8000/api/runners/5b73f30faf84a74dc0ef8adf'
  this.showAssignments = true
  fetch(url).then(data => data.json()).then((doc) => { this.assignedOrder = doc.currentOrder })
}
