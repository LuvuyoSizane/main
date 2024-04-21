using Simple_API_Assessment.Models;

namespace Simple_API_Assessment.Data.Repository
{
    public interface IApplicantRepository
    {

        public void CreateApplicant(Applicant applcant);

        public Applicant RetriveSpecificApplicant(int id);

        public IEnumerable<Applicant> RetriveAllApplicants();

        public void UpdateApplicant(Applicant applicant);

        public void DeleteApplicant(int id);

    }
}
