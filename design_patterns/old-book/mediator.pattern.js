/* 
  mediator is a behavioral design pattern that allows us to expose a unified interface 
  through which the different parts of a system may communicate.
*/

/*
  Good example - airport. All planes communicate to main tower, instead of talking to each other
  Tower - mediator.
*/

/*
  Mediator just uses events, because they fit, while Observer/PubSub fully rely on events
  Mediator control workflow between objects
*/

// copy/paste from book - just to show logic, kind of pseudo-code
var orgChart = {
  addNewEmployee: function(){
    // getEmployeeDetail provides a view that users interact with
    var employeeDetail = this.getEmployeeDetail();
    // when the employee detail is complete, the mediator (the 'orgchart' object)
    // decides what should happen next
    employeeDetail.on("complete", function(employee){
      // set up additional objects that have additional events, which are used
      // by the mediator to do additional things
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee){
        employee.save();
      });
    });
  },
  // ...
}

/*
  Events aggregators (Visitor/Pubsub) only pass the events. 
  Business logic is implemented in objects, not events

  While Mediator has business logic and workflow implemented in itself.
  Mediator coordinates objects behaviour.
*/

/*
  Sometime good idea to combine EventsAggregator and Mediator. - i don't think so, it is overcomplecated in my opinion
*/

// NEGATIVE Mediator - one source of failure + performance issues, due to logic in 1 place

