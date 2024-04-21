using System.ComponentModel.DataAnnotations;

namespace Simple_API_Assessment.Models
{
    public class Applicant
    {
        
        public int Id { get; set; }
        public string Name { get; set; }

        //navigation properties
        public ICollection<Skill> Skills { get; set; }
    }
}
