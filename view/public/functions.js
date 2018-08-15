function placeOrderFunction () {
  if (this.orderDescription) {
    this.showNoOrderWarning = false
    return
  }
  this.showNoOrderWarning = true
}
