///<reference path="/Scripts/services/TodoService.js"/>
///<reference path="/Scripts/mappers/ItemMapper.js"/>
///<reference path="/Scripts/viewmodels/TodoViewModel.js"/>
///<reference path="/Scripts/knockout-2.2.0.debug.js"/>
///<reference path="/Scripts/jquery-1.8.2.js"/>

describe('TodoService', function () {
    var todoService, itemMapper = null;

    beforeEach(function() {
        itemMapper = new JasmineDemo.Mappers.ItemMapper();
        todoService = new JasmineDemo.Services.TodoService("/api", jQuery, itemMapper);

        spyOn(itemMapper, "mapToViewModel").and.callThrough();
    });

    describe('The editItem method', function () {
        var promise, post = null;
        
        beforeEach(function () {
            promise = jQuery.Deferred();
            post = spyOn(jQuery, 'post');
        });

        it('should throw an exception when item id is empty', function() {
            // Arrange
            var item = new JasmineDemo.Models.TodoItemViewModel('', 'high', 'testing', 'this is a test', '04/29/2014');
            
            // Act/Assert
            expect(function() {
                todoService.editItem(item);
            }).toThrow();
        });

        it('should include the item id as part of the API request URL', function() {
            // Arrange
            var item = new JasmineDemo.Models.TodoItemViewModel(20, 'high', 'testing', 'this is a test', '04/29/2014');
            var expectedUri = '/api/items/' + item.id();

            // Act
            todoService.editItem(item);

            // Assert
            expect(post.calls.argsFor(0)[0]).toEqual(expectedUri);
        });
    });

    describe('The getAll method', function() {
        var deferred, jqGet, testItem = null;

        beforeEach(function () {
            deferred = jQuery.Deferred();
            jqGet = spyOn(jQuery, 'get').and.returnValue(deferred.promise());
            testItem = { id: 5, priority: 'high', title: 'test object', dueDate: '4/28/2014' };
        });

        it('should return an array of TodoViewModel items', function() {
            // Arrange
            deferred.resolve([testItem]);

            // Act
            var promise = todoService.getAll();

            // Assert
            promise
                .done(function(data) {
                    expect(data[0] instanceof JasmineDemo.Models.TodoItemViewModel).toBe(true);
                })
                .fail(function() {
                    throw "Promise was rejected";
                });
        });

        it('should map items from the server to TodoViewModel items', function() {
            // Arrange
            deferred.resolve([testItem]);

            // Act
            var promise = todoService.getAll();

            // Assert
            promise
                .done(function(data) {
                    expect(itemMapper.mapToViewModel).toHaveBeenCalledWith([testItem]);
                })
                .fail(function() {
                    throw "Promise was rejected";
                });
        });
    });
});