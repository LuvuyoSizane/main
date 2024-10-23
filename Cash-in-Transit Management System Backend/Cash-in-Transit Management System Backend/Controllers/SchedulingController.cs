using Business_Access_Layer.Interfaces;
using Business_Access_Layer.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;

namespace Cash_in_Transit_Management_System_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SchedulingController : ControllerBase
    {
        private readonly ISchedulingService _schedulingService;

        public SchedulingController(ISchedulingService schedulingService)
        {
            _schedulingService = schedulingService;
        }

        [HttpPost]
        [Route("AddPickup")]
        public async Task<IActionResult> AddPickup([FromBody] Pickup pickup)
        {
            if (pickup == null)
            {
                return BadRequest(new { message = "Invalid pickup data" });
            }

            try
            {
                await _schedulingService.AddPickup(pickup);
                return Ok(new { message = "Pickup Successfully Added" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPost]
        [Route("AddDelivery")]
        public async Task<IActionResult> AddDelivery([FromBody] Delivery delivery)
        {
            if (delivery == null)
            {
                return BadRequest(new { message = "Invalid Delivery data" });
            }

            try
            {
                await _schedulingService.AddDelivery(delivery);
                return Ok(new { message = "Delivery Successfully Added" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpGet]
        [Route("GetPickups")]

        public async Task<IEnumerable<Pickup>> GetPickups()
        {
            return await _schedulingService.GetAllPickups();
        }

        [HttpGet]
        [Route("GetDeliveries")]

        public async Task<IEnumerable<Delivery>> GetDeliveries()
        {
            return await _schedulingService.GetAllDeliveries();
        }

        [HttpGet]
        [Route("GetPickup/{id}")]
        public async Task<IActionResult> GetPickup(int id)
        {
            var pickup = await _schedulingService.GetPickup(id);
            if (pickup == null)
            {
                return NotFound("Pickup not found");
            }
            return Ok(pickup);
        }

        [HttpGet]
        [Route("GetDelivery/{id}")]
        public async Task<IActionResult> GetDelivery(int id)
        {
            var delivery = await _schedulingService.GetDelivery(id);
            if (delivery == null)
            {
                return NotFound("Delivery not found");
            }
            return Ok(delivery);
        }

        [HttpDelete]
        [Route("DeletePickup/{id}")]
        public async Task<IActionResult> DeletePickup(int id)
        {
            await _schedulingService.DeletePickup(id);
            return Ok(new { message = "Pickup Successfully Deleted" });
        }

        [HttpDelete]
        [Route("DeleteDelivery/{id}")]
        public async Task<IActionResult> DeleteDelivery(int id)
        {
            await _schedulingService.DeleteDelivery(id); 
            return Ok(new { message = "Delivery Successfully Deleted" });
        }
    }


}
