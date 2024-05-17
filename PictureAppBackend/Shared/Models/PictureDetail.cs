using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Data
{
    public class PictureDetail
    {
        [Key]
        public int ID { get; set; }
        
        public int UserID { get; set; }
        public string Picture { get; set; }
        public string Description { get; set; }
        public string AgeRange { get; set; }

    }
}
