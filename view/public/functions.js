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
  const url = 'http://localhost:8000/api/orders/placed'
  fetch(url).then(data => data.json()).then((orders) => { this.placedOrders = orders })
}

function getStatusFunction (response) {
  this.showStatus = true
  if (response.result.status) {
    this.orderPlacementStatus = 'your order is placed :)'
    return
  }
  this.orderPlacementStatus = 'your order did not get place :('
}
