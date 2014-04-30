/// <reference path="/Scripts/mappers/ItemMapper.js"/>
/// <reference path="/Scripts/viewmodels/TodoViewModel.js"/>
/// <reference path="/Scripts/knockout-2.2.0.js"/>

describe('ItemMapper', function() {
    var itemMapper, serverItem, viewModelItem = null;

    beforeEach(function() {
        itemMapper = new JasmineDemo.Mappers.ItemMapper();
        viewModelItem = new JasmineDemo.Models.TodoItemViewModel(5, "high", "test", "test description", "4/14/2014");
        serverItem = {
            id: viewModelItem.id(),
            priority: viewModelItem.priority(),
            title: viewModelItem.title(),
            description: viewModelItem.description(),
            dueDate: viewModelItem.dueDate()
        }
    });

    describe("The mapToViewModel method", function() {
        
        it("should map a single item to a view model", function() {
            // Arrange

            // Act
            var result = itemMapper.mapToViewModel(serverItem);

            // Assert
            expect(result.id()).toBe(5);
            expect(result.priority()).toBe("high");
            expect(result.title()).toBe("test");
            expect(result.description()).toBe("test description");
            expect(result.dueDate()).toBe("4/14/2014");
        });

        it("should map an array of items to an array of view models", function() {
            // Arrange
            var serverItems = [serverItem];

            // Act
            var results = itemMapper.mapToViewModel(serverItems);

            // Assert
            expect(Array.isArray(results)).toEqual(true);
            expect(results[0].id()).toBe(5);
            expect(results[0].priority()).toBe("high");
            expect(results[0].title()).toBe("test");
            expect(results[0].description()).toBe("test description");
            expect(results[0].dueDate()).toBe("4/14/2014");
        });
    });

    describe("The mapFromViewModel method", function() {

        it("should map a single view model to a POJSO", function() {
            // Act
            var result = itemMapper.mapFromViewModel(viewModelItem);

            // Assert
            expect(result).toEqual(serverItem);
        });

        it("should map an array of view models to an array of POJSOs", function() {
            // Arrange
            var viewModels = [viewModelItem];

            // Act
            var results = itemMapper.mapFromViewModel(viewModels);

            // Assert
            expect(results).toEqual([serverItem]);
        });
    });
});