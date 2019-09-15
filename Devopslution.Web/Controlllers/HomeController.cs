using Microsoft.AspNetCore.Mvc;


namespace Devopslution.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

