using Business_Logic_Layer.Interfaces;
using Data_Access_Layer.Repository;
using Shared.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Logic_Layer.Service
{
    public class PictureService:IPictureService
    {
        public readonly PictureRepository pr;
        public PictureService(AppDBContext db) {

            pr = new PictureRepository(db);
        
        }

        public void PictureUpload(PictureDetail picture)
        {
            pr.PictureUpload(picture);
        }

        public PictureDetail RetrivePicture(int id)
        {
         return pr.RetrivePicture(id);
        }

        public IEnumerable<PictureDetail> RetrivePictureAll()
        {
            return pr.RetrivePictureAll();
        }
    }
}
