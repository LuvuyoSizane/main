using Shared.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Logic_Layer.Interfaces
{
    public interface IPictureService
    {
        public void PictureUpload(PictureDetail picture);

        public PictureDetail RetrivePicture(int id);

        public IEnumerable<PictureDetail> RetrivePictureAll();
    }
}
