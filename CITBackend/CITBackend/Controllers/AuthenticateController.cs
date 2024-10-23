using CITBackend.Model;
using CITBackend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CITBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly AuthenticationService _authrepo;

        public AuthenticateController(AuthenticationService authrepo)
        {
            _authrepo = authrepo;
        }


        [HttpPost]
        [Route("Register")]
        public JsonResult Register(User user)
        {
            try
            {
                _authrepo.RegisterAsync(user);
                return new JsonResult(new { message = "User Successfully Registered" });
            }
            catch (Exception ex)
            {
                return new JsonResult(new { error = ex.Message });
            }
        }

        [HttpPost]
        [Route("Login")]
        public JsonResult Login(string username, string password)
        {
            try
            {
                string data= username + password;

                return new JsonResult("Hello "+ data);

            }
            catch (Exception ex)
            {
                return new JsonResult(new { error = ex.Message });
            }
        }

        [HttpPost]
        [Route("Authorize")]
        public JsonResult Authorize(User user, Role role)
        {
            return new JsonResult(_authrepo.AuthorizeAsync(user, role));

        }
    }
}
