using Business_Access_Layer.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;
using System.Net;
using System.Threading.Tasks;

namespace Cash_in_Transit_Management_System_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly IAuthenticationService _authserv;

        public AuthenticateController(IAuthenticationService authserv)
        {
            _authserv = authserv;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest(new { message = "Invalid user data" });
            }

            try
            {
                await _authserv.RegisterAsync(user);
                return Ok(new { message = "User Successfully Registered" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] Credentials credentials)
        {
            if (string.IsNullOrEmpty(credentials.username) || string.IsNullOrEmpty(credentials.password))
            {
                return BadRequest(new { message = "Username and password are required" });
            }

            try
            {
                User user = await _authserv.LoginAsync(credentials.username, credentials.password);
                if (user == null)
                {
                    return Unauthorized(new { message = "Invalid credentials" });
                }

                return Ok(new { user });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPost]
        [Route("Authorize")]
        public async Task<IActionResult> Authorize([FromBody] User user)
        {
            if (user == null || user.Role == null)
            {
                return BadRequest(new { message = "Invalid user or role data" });
            }

            try
            {
                var result = await _authserv.AuthorizeAsync(user, user.Role);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }
    }
}
