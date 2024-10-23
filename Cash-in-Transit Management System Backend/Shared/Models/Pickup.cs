using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Models
{
    public class Pickup
    {
        [Key]
        public int Id { get; set; }
        public string Location { get; set; }
        public string ScheduledTime { get; set; }


    }


}
