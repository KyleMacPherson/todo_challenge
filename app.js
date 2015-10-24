(function () {
  var toDoList = angular.module('ToDoList', ['ngResource']);

  toDoList.controller('ToDoController', function (){
    var self = this;
    this.list = [];
    this.addTask = function (task) {
      self.list.push({name: task, completed: false})
    }
    this.deleteTask = function (index) {
      self.list.splice(index, 1);
    }
  });
})();
