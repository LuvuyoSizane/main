using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Models
{
    public class Incident
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public string OccurredAt { get; set; }
        public string Location { get; set; }
    }
}
