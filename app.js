(function () {
  var toDoList = angular.module('ToDoList', ['ngResource']);

  toDoList.controller('ToDoController', function (){
    this.list = tasks;
  });

  var tasks = [
    {
      name: 'Make Todo list',
      completed: false
    }
  ];

})();
