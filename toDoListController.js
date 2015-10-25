(function () {
  var toDoList = angular.module('ToDoList', ['ngResource']);

  toDoList.controller('ToDoController', function (){
    var self = this;
    this.list = [];
    this.addTask = function (task) {

      var newTask = {
        name: task,
        completed: false,
        showing: true
      }
      self.list.push(newTask)
      self.task = '';
    }

    this.deleteTask = function (index) {
      self.list.splice(index, 1);
    }

    this.markTaskCompleted = function (index) {
      self.list[index].completed = true
    };

    this.showCompleted =  function () {
      for (var i = 0; i < self.list.length; i++) {
        if(self.list[i].completed){
          self.list[i].showing = true
        } else {
          self.list[i].showing = false
        }
      }
    };

    this.showActive =  function () {
      for (var i = 0; i < self.list.length; i++) {
        if(self.list[i].completed){
          self.list[i].showing = false
        } else {
          self.list[i].showing = true
        }
      }
    };

    this.showAll =  function () {
      for (var i = 0; i < self.list.length; i++) {
          self.list[i].showing = true
      }
    };

  });
})();
