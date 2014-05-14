///<reference path="/Scripts/services/TodoService.js"/>
///<reference path="/Scripts/mappers/ItemMapper.js"/>
///<reference path="/Scripts/viewmodels/TodoViewModel.js"/>
///<reference path="/Scripts/knockout-2.2.0.debug.js"/>
///<reference path="/Scripts/jquery-1.8.2.js"/>

describe('TodoService', function () {
    var todoService, itemMapper;

    beforeEach(function () {
        itemMapper = new JasmineDemo.Mappers.ItemMapper();
        var api = '/api';
        todoService = new JasmineDemo.Services.TodoService(api, jQuery, itemMapper);
    });

    describe('The addItem method', function() {
        it('should use HTTP POST when creating a new item', function() {
            
        });
    });
});
