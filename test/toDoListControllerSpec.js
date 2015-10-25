describe('toDoListController', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('toDoListController');
  }));

  describe('new task', function () {
    beforeEach(function() {
      ctrl.addTask('test')
      task = ctrl.tasks[0]
    });

  it('is not complete when added', function() {
    expect(task.completed).toEqual(false)
  });

  });

});
