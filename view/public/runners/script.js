const appOptions = {
  el: '#app',
  data: {
    assignedOrder: []
  },
  methods: {
    getAssignments: getAssignmentsFunction
  }
}

const app = new Vue(appOptions)
