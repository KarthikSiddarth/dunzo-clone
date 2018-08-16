function getAssignmentsFunction () {
  const url = 'http://localhost:8000/api/runners/5b73f30faf84a74dc0ef8adf'
  this.showAssignments = true
  fetch(url).then(data => data.json()).then((doc) => { this.assignedOrder = doc.currentOrder })
}
