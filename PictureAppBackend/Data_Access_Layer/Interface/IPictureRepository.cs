using Shared.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Interface
{
    public interface IPictureRepository
    {
        public void PictureUpload(PictureDetail picture);

        public PictureDetail RetrivePicture(int id);

        public IEnumerable<PictureDetail> RetriveAllPictures();
    }
}
