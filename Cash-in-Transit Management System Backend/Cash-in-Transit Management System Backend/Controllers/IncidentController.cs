using Business_Access_Layer.Interfaces;
using Business_Access_Layer.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;

namespace Cash_in_Transit_Management_System_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentController : ControllerBase
    {
        private readonly IIncidentService _incidentService;

        public IncidentController(IIncidentService incidentService)
        {
            _incidentService = incidentService;
        }

        [HttpPost]
        [Route("AddIncident")]
        public async Task<IActionResult> AddIncident([FromBody] Incident incident)
        {
            if (incident == null)
            {
                return BadRequest(new { message = "Invalid Incident data" });
            }

            try
            {
                await _incidentService.AddIncident(incident);
                return Ok(new { message = "Incident Successfully Added" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPut]
        [Route("EditIncident")]

        public async Task<IActionResult> EditIncident([FromBody] Incident incident)
        {
            await _incidentService.EditIncident(incident);
            return Ok(new { message = "Incident Successfully Updated" });
        }

        [HttpDelete]
        [Route("DeleteIncident/{id}")]
        public async Task<IActionResult> DeleteIncident(int id)
        {
            await _incidentService.DeleteIncident(id);
            return Ok(new { message = "Incident Successfully Deleted" });
        }


        [HttpGet]
        [Route("GetIncidents")]

        public async Task<IEnumerable<Incident>> GetIncidents()
        {
            return await _incidentService.GetAllIncidents();
        }

        [HttpGet]
        [Route("GetIncident/{id}")]
        public async Task<IActionResult> GetIncident(int id)
        {
            var incident = await _incidentService.GetIncident(id);
            if (incident == null)
            {
                return NotFound("Incident not found");
            }
            return Ok(incident);
        }
    }
}
