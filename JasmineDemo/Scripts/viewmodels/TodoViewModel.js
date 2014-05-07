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

        this.showAdd = function() {
            this.todoItem(new namespace.TodoItemViewModel());
            this.addMode(true);
        }

        this.addItem = function() {
            that.todoItems.push(that.todoItem);
            this.addMode(false);
        }

        this.cancelAddItem = function() {
            this.addMode(false);
        }
    };

    return namespace;
})(JasmineDemo.Models || {});