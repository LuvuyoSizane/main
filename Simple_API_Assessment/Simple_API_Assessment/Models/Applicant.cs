using System.ComponentModel.DataAnnotations;

namespace Simple_API_Assessment.Models
{
    public class Applicant
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Skill> Skills { get; set; }
    }
}
