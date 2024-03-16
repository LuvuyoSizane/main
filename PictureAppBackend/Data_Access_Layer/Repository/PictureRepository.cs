using Data_Access_Layer.Interface;
using Shared.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Repository
{
    public class PictureRepository: IPictureRepository
    {
        private readonly AppDBContext _db;

        public PictureRepository(AppDBContext db)
        {
            _db = db;
        }

        public void PictureUpload(PictureDetail picture)
        {
            
            _db.Pictures.Add(picture);
            _db.SaveChanges();
        }

        public PictureDetail RetrivePicture(int id)
        {
            return _db.Pictures.Find(id);
        }

        public IEnumerable<PictureDetail> RetrivePictureAll()
        {
            return _db.Pictures;
        }
    }
}
