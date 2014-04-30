///<reference path="/Scripts/viewmodels/TodoViewModel.js"/>
///<reference path="/Scripts/knockout-2.2.0.debug.js"/>


describe('TodoViewModel', function () {
    var viewModel = null;

    beforeEach(function () {
        viewModel = new JasmineDemo.Models.TodoViewModel();
    });

    it("should initially contain an empty list of todo items", function () {
        // assert
        expect(viewModel.todoItems().length).toBe(0);
    });

    describe("The addItem method", function() {
        it("should update todo items array when called", function() {
            // arrange
            var item = new JasmineDemo.Models.TodoItemViewModel();

            // act
            viewModel.addItem(item);

            // assert
            expect(viewModel.todoItems().length).toBe(1);
        });
    });

    describe("The showAdd method", function() {
        it("should create a new todo item when called", function() {
            // arrange
            var existing = viewModel.todoItem();

            // act
            viewModel.showAdd();

            // assert
            expect(existing).toBeNull();
            expect(viewModel.todoItem()).not.toBeNull();
        });
    });
});