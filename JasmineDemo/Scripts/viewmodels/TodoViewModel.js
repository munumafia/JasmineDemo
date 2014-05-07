var JasmineDemo = window.JasmineDemo || {};

JasmineDemo.Models = (function (namespace) {
    namespace.TodoItemViewModel = function (id, priority, title, description, dueDate) {
        this.id = ko.observable(id || '');
        this.priority = ko.observable(priority || '');
        this.title = ko.observable(title || '');
        this.description = ko.observable(description || '');
        this.dueDate = ko.observable(dueDate || '');
    };

    namespace.TodoViewModel = function() {
        var that = this;
        this.todoItems = ko.observableArray([]);
        this.todoItem = ko.observable(new namespace.TodoItemViewModel());
        this.addMode = ko.observable(false);
        this.editMode = ko.observable(false);
        this.currentItem = ko.observable(null);

        this.showAdd = function() {
            that.todoItem(new namespace.TodoItemViewModel());
            that.addMode(true);
        }

        this.addEditItem = function() {
            if (this.addMode()) {
                that.todoItems.push(that.todoItem());
                that.addMode(false);
                return;
            }

            that.editMode(false);
        }

        this.todoClick = function(todoItem) {
            that.currentItem(todoItem);
        }

        this.editCurrent = function() {
            that.todoItem(that.currentItem());
            that.editMode(true);
        }

        this.cancelAddEdit = function() {
            that.addMode(false);
            that.editMode(false);
        }

        this.deleteCurrent = function() {
            that.todoItems.remove(that.currentItem());
        }
    };

    return namespace;
})(JasmineDemo.Models || {});