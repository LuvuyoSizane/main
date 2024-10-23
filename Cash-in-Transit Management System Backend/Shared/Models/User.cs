using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Shared.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        [JsonIgnore] //Data transfer objects
        public string Password { get; set; }

        public string FullName { get; set; }
        public Role Role { get; set; }

        
    }

    public enum Role
    {
        Admin,
        Dispatcher,
        Driver,
        SecurityPersonnel
    }

  
}
