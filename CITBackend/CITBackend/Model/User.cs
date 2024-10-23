using System.ComponentModel.DataAnnotations;

using System.Text.Json.Serialization;

namespace CITBackend.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }

        [JsonIgnore]
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
