using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using JasmineDemo.Models;

namespace JasmineDemo.Controllers
{
    public class ItemsController : ApiController
    {
        private static List<TodoItemViewModel> _TodoItems = new List<TodoItemViewModel>();
            
        [HttpGet]
        [Route("api/items")]
        public List<TodoItemViewModel> List()
        {
            return _TodoItems;
        }

        [HttpGet]
        [Route("api/items/{id:int}")]
        public TodoItemViewModel Get(int id)
        {
            var item = _TodoItems.SingleOrDefault(i => i.Id == id);
            return item;
        }

        [HttpPost]
        [Route("api/items")]
        public TodoItemViewModel Post(TodoItemViewModel todoItem)
        {
            todoItem.Id = !_TodoItems.Any() ? 1 : _TodoItems.Max(ti => ti.Id) + 1;
            _TodoItems.Add(todoItem);

            return todoItem;
        }
    }
}