var JasmineDemo = window.JasmineDemo || {};

JasmineDemo.Mappers = (function(namespace) {
    namespace.ItemMapper = function() {
        // Default constructor
    }

    namespace.ItemMapper.prototype.mapFromViewModel = function (viewModel) {
        var mapper = function(item) {
            return {
                id: item.id(),
                priority: item.priority(),
                title: item.title(),
                description: item.description(),
                dueDate: item.dueDate()
            }
        }

        return Array.isArray(viewModel)
            ? viewModel.map(mapper)
            : mapper(viewModel);
    }

    namespace.ItemMapper.prototype.mapToViewModel = function (serverItem) {
        var mapper = function(item) {
            return new JasmineDemo.Models.TodoItemViewModel(
                item.id,
                item.priority,
                item.title,
                item.description,
                item.dueDate);
        }

        return Array.isArray(serverItem)
            ? serverItem.map(mapper)
            : mapper(serverItem);
    }
    
    return namespace;
})(JasmineDemo.Mappers || {});