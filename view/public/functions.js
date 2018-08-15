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
    fetch(url, postOrderOptions).then(data => data.json()).then(console.log)
    return
  }
  this.showNoOrderWarning = true
}

function showOrdersFunction () {
  const url = 'http://localhost:8000/api/orders/placed'
  fetch(url).then(data => data.json()).then(console.log)
}
