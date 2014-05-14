describe('TodoViewModel', function () {
    var viewModel = null;
    jasmine.getFixtures().fixturesPath = '/Html/todo/';

    beforeEach(function() {
        viewModel = new JasmineDemo.Models.TodoViewModel();
        loadFixtures('index.html');
    });

    describe('The addBtn button', function() {
        it('should call the showAdd method when clicked', function() {
            
        });
    });

    describe('The showAdd method', function() {
        it('should show the newTodo form when called', function() {
            
        });
    });
});