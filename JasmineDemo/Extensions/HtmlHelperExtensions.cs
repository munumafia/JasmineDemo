using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JasmineDemo.Extensions
{
    public static class HtmlHelperExtensions
    {
        private const string _FilePath = @"~/Html";

        public static HtmlString RenderHtmlPartial(this HtmlHelper htmlHelper, string fileName)
        {
            var basePath = HttpContext.Current.Server.MapPath(_FilePath);
            var fullPath = Path.Combine(basePath, fileName);
            var contents = File.ReadAllText(fullPath);

            return new HtmlString(contents);
        }
    }
}