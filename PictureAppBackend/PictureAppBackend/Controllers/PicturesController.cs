using Business_Logic_Layer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Shared.Data;

namespace PictureAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PicturesController : ControllerBase
    {

        private readonly IPictureService _pService;

        public PicturesController(IPictureService pService)
        {
            _pService = pService;
        }


        [HttpPost]
        [Route("Upload")]
        public JsonResult AddPictureDetails(PictureDetail picture)
        {
            try
            {
                _pService.PictureUpload(picture);
                return new JsonResult("Successfully Uploaded Picture");

            }
            catch (Exception ex)
            {
                return new JsonResult(ex.Message);

            }
        }


        [HttpGet]
        [Route("GetPictures")]
        public JsonResult GetAllPictures()
        {
            try
            {
                return new JsonResult(_pService.RetrivePictureAll());

            }
            catch (Exception ex)
            {
                return new JsonResult(ex.Message);

            }
        }


        [HttpGet]
        [Route("GetPicture/{id}")]
        public JsonResult GetPicture(int id)
        {
            return new JsonResult(_pService.RetrivePicture(id));
        }

    }
}
