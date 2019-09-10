using Microsoft.AspNetCore.Mvc;


namespace Devopslution.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

