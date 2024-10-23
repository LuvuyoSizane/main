using Microsoft.EntityFrameworkCore;
using Simple_API_Assessment.Models;
using System;

namespace Simple_API_Assessment.Data.Repository
{
    public class ApplicantRepo : IApplicantRepository
    {
        private readonly DataContext _db;

        public ApplicantRepo(DataContext db)
        {
            _db = db;
        }

        public void CreateApplicant(Applicant applcant)
        {

            _db.Applicants.Add(applcant);
            _db.SaveChanges();
        }

        public Applicant RetriveSpecificApplicant(int id)
        {
            return _db.Applicants.Include(a => a.Skills).SingleOrDefault(a => a.Id == id);    
        }

        public IEnumerable<Applicant> RetriveAllApplicants()
        {
            return _db.Applicants.Include(a => a.Skills).ToList();
        }

        public void UpdateApplicant(Applicant applicant)
        {
            _db.Applicants.Update(applicant);
            _db.SaveChanges();
        }

        public void DeleteApplicant(int id)
        {
            _db.Applicants.Remove(_db.Applicants.Find(id));
            _db.SaveChanges();
        }
    }
}
