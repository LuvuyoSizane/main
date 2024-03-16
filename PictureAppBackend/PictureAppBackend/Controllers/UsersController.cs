using Business_Logic_Layer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PictureAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _uService;

        public UsersController(IUserService uService)
        {
            _uService = uService;
        }


        [HttpPost]
        [Route("Login")]
        public JsonResult Login(string email, string password)
        {
            try
            {
                return new JsonResult(_uService.Login(email, password));
            }
            catch (Exception ex)
            {
                return new JsonResult(ex.Message);

            }
        }

    }
}
