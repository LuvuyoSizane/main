using Microsoft.EntityFrameworkCore;
using Simple_API_Assessment.Models;
using System;

namespace Simple_API_Assessment.Data
{
    public class DataContext : DbContext
    {
        
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Skill> Skills { get; set; }
        public DbSet<Applicant> Applicants { get; set; }

    }
}
