using Business_Access_Layer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;

namespace Cash_in_Transit_Management_System_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserVehicleController : ControllerBase
    {
        private readonly IManagementService _managementService;

        public UserVehicleController(IManagementService managementService)
        {
            _managementService = managementService;
        }


        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest(new { message = "Invalid Personnel data" });
            }

            try
            {
                await _managementService.AddUser(user);
                return Ok(new { message = "Personnel Successfully Added" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPost]
        [Route("AddVehicle")]
        public async Task<IActionResult> AddVehicle([FromBody] Vehicle vehicle)
        {
            if (vehicle == null)
            {
                return BadRequest(new { message = "Invalid Vehicle data" });
            }

            try
            {
                await _managementService.AddVehicle(vehicle);
                return Ok(new { message = "Vehicle Successfully Added" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpDelete]
        [Route("DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await _managementService.DeleteUser(id);
            return Ok(new { message = "Personnel Successfully Deleted" });
        }

        [HttpDelete]
        [Route("DeleteVehicle/{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            await _managementService.DeleteVehicle(id);
            return Ok(new { message = "Vehicle Successfully Deleted" });
        }

        [HttpGet]
        [Route("GetUser/{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _managementService.GetUser(id);
            if (user == null)
            {
                return NotFound("User not found");
            }
            return Ok(user);
        }

        [HttpGet]
        [Route("GetVehicle/{id}")]
        public async Task<IActionResult> GetVehicle(int id)
        {
            var vehicle = await _managementService.GetVehicle(id);
            if (vehicle == null)
            {
                return NotFound("Vehicle not found");
            }
            return Ok(vehicle);
        }

        [HttpGet]
        [Route("GetUsers")]

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _managementService.GetAllUsers();
        }

        [HttpGet]
        [Route("GetVehicles")]

        public async Task<IEnumerable<Vehicle>> GetAllVehicles()
        {
            return await _managementService.GetAllVehicles();

        }

        [HttpPut]
        [Route("UpdateUser")]

        public async Task<IActionResult> UpdateUser([FromBody] User user)
        {
            await _managementService.UpdateUser(user);
            return Ok(new { message = "Personnel Successfully Updated" });
        }

        [HttpPut]
        [Route("UpdateVehicle")]

        public async Task<IActionResult> UpdateVehicle([FromBody] Vehicle vehicle)
        {
            await _managementService.UpdateVehicle(vehicle);
            return Ok(new { message = "Vehicle Successfully Updated" });
        }
    }
}


