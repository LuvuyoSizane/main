using Business_Access_Layer.Interfaces;
using Business_Access_Layer.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;

namespace Cash_in_Transit_Management_System_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RouteController : ControllerBase
    {
        private readonly IRouteService _routeService;

        public RouteController(IRouteService routeService)
        {
            _routeService = routeService;
        }

        [HttpPost]
        [Route("AddRoute")]
        public async Task<IActionResult> AddRoute([FromBody] Shared.Models.Route route)
        {
            if (route == null)
            {
                return BadRequest(new { message = "Invalid route data" });
            }

            try
            {
                await _routeService.AddRoute(route);
                return Ok(new { message = "Route Successfully Added" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }


        [HttpGet]
        [Route("GetRoutes")]

        public async Task<IEnumerable<Shared.Models.Route>> GetRoutes()
        {
            return await _routeService.GetAllRoutes();
        }

        [HttpDelete]
        [Route("DeleteRoute/{id}")]
        public async Task<IActionResult> DeleteRoute(int id)
        {
            await _routeService.DeleteRoute(id);
            return Ok(new { message = "Route Successfully Deleted" });
        }

        [HttpGet]
        [Route("GetRoute/{id}")]
        public async Task<IActionResult> GetRoute(int id)
        {
            var user = await _routeService.GetRoute(id);
            if (user == null)
            {
                return NotFound("Route not found");
            }
            return Ok(user);
        }

    }
}
