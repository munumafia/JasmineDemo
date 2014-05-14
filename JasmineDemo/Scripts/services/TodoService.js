var JasmineDemo = window.JasmineDemo || {};

JasmineDemo.Services = (function (namespace) {
    var todoService = function(apiUri, jQuery, itemMapper) {
        this.apiUri = apiUri;
        this.jQuery = jQuery;
        this.itemMapper = itemMapper;
    }

    /// <summary>
    /// Add a new item
    /// </summary>
    todoService.prototype.addItem = function(todoItem) {
        return this.jQuery.post(this.apiUri + '/items', {
            data: {
                priority: todoItem.priority(),
                title: todoItem.title(),
                description: todoItem.description()
            }
        });
    }

    /// <summary>
    /// Edit an existing item
    /// </summary>
    todoService.prototype.editItem = function (todoItem) {
        if (todoItem.id() == '' || todoItem.id() == null) {
            var message = "The id() property of todoItem cannot be null";
            throw message;
        }

        var uri = this.apiUri + '/items/' + todoItem.id();
        return this.jQuery.post(uri, {
            data: {
                priority: todoItem.priority(),
                title: todoItem.title(),
                description: todoItem.description(),
                dueDate: todoItem.dueDate()
            }
        });
    }

    /// <summary>
    /// Deletes an existing item on the server
    /// </summary>
    todoService.prototype.deleteItem = function (todoItem) {
        return this.jQuery.ajax({
            url: this.apiUri + '/items/' + todoItem.id(),
            method: "DELETE"
        });
    }

    /// <summary>
    /// Return all the items on the server
    /// </summary>
    todoService.prototype.getAll = function() {
        var uri = this.apiUri + '/items';
        var deferred = this.jQuery.Deferred();
        var that = this;

        this.jQuery.get(uri)
            .done(function(data) {
                data = that.itemMapper.mapToViewModel(data);
                deferred.resolve(data);
            })
            .fail(function() {
                deferred.reject();
            });

        return deferred.promise();
    }

    namespace.TodoService = todoService;
    return namespace;
})(JasmineDemo.Services || {});