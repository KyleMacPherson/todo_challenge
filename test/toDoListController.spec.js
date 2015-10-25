describe('toDoListController', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoController');
  }));

    describe('new task', function () {
      beforeEach(function() {
      ctrl.addTask('test')
      task = ctrl.list[0]
    });

  it('can add new task', function() {
    expect(ctrl.list).toContain(task)
  });

  it('is not complete when added', function() {
    expect(task.completed).toEqual(false)
  });

  it('can be marked as complete', function () {
    ctrl.markTaskCompleted(0)
    expect(task.completed).toEqual(true)
  });

  it('can be deleted', function () {
    ctrl.deleteTask(0)
    expect(ctrl.list).not.toContain(task)
  })

  it("active task shown when 'show active' filter is on", function () {
    ctrl.showActive()
    expect(task.showing).toEqual(true)
  })

  it("active task not shown when 'show completed' filter is on", function () {
    ctrl.showCompleted()
    expect(task.showing).toEqual(false)
  })

  it("all tasks shown when 'show all' filter is on", function () {
    ctrl.markTaskCompleted(0)
    ctrl.addTask('test 2')
    task2 = ctrl.list[1]
    expect((task.showing) && (task2.showing)).toEqual(true)
  });

  });

});
