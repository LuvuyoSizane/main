using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Simple_API_Assessment.Data.Repository;
using Simple_API_Assessment.Models;

namespace Simple_API_Assessment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        private readonly IApplicantRepository _apprepo;

        public ApplicantController(IApplicantRepository apprepo)
        {
            _apprepo = apprepo;
        }


        [HttpPost]
        [Route("CreateApplicant")]
        public JsonResult CreateApplicant(Applicant applicant)
        {
            try
            {
                _apprepo.CreateApplicant(applicant);
                return new JsonResult("Applicant Successfully Added");

            }
            catch (Exception ex)
            {
                return new JsonResult("Error! (" + ex.Message + ") An error occured could not create applicant contact Luvuyo at luvuyosizane7@gmail.com to fix error ");

            }
        }

        [HttpPut]
        [Route("UpdateApplicant")]
        public JsonResult UpdateApplicant(Applicant applicant)
        {
            try
            {
                _apprepo.UpdateApplicant(applicant);
                return new JsonResult("Applicant Successfully Updated");

            }
            catch (Exception ex)
            {
                return new JsonResult("Error! (" + ex.Message + ") An error occured could not update applicant's details contact Luvuyo at luvuyosizane7@gmail.com to fix error ");

            }
        }

        [HttpGet]
        [Route("GetAllApplicants")]
        public JsonResult GetAllApplicants()
        {
            try
            {
                return new JsonResult(_apprepo.RetriveAllApplicants());

            }
            catch (Exception ex)
            {
                return new JsonResult("Error! (" + ex.Message + ") An error occured could not retrive all applicants details contact Luvuyo at luvuyosizane7@gmail.com to fix error ");

            }
        }


        [HttpGet]
        [Route("GetSpecificApplicant/{id}")]
        public JsonResult GetSpecificApplicant(int id)
        {
            return new JsonResult(_apprepo.RetriveSpecificApplicant(id));
        }


        [HttpDelete]
        [Route("DeleteApplicant/{id}")]
        public JsonResult DeleteApplicant(int id)
        {
            try
            {
                _apprepo.DeleteApplicant(id);
                return new JsonResult("Applicant Successfully Deleted ");

            }
            catch (Exception ex)
            {
                return new JsonResult("Error! (" + ex.Message + ") An error occured could not delete applicant's details contact Luvuyo at luvuyosizane7@gmail.com to fix error ");

            }
        }
    }
}
 