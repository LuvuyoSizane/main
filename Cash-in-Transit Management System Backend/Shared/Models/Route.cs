using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Models
{
    public class Route
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int PickupID { get; set; }

        public int DeliveryID { get; set; }

        public int VehicleID { get; set; }

        public int [] PersonnelIds { get; set; }
    }
}
