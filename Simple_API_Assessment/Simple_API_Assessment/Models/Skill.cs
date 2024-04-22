using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Simple_API_Assessment.Models
{
    public class Skill
    {
    
        public int Id { get; set; }
        public string Name { get; set; }
        
        //navigation properties 
        public Applicant Applicant { get; set; }
        public int ApplicantId { get; set; }
    }
}
