using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JasmineDemo.Models
{
    public class TodoItemViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Priority { get; set; }
        public string DueOn { get; set; }
    }
}