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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Applicant>(entity =>
            {
                entity.HasKey(a => a.Id);
                entity.Property(a => a.Name).IsRequired();
              
            });

            modelBuilder.Entity<Skill>(entity =>
            {
                entity.HasKey(a => a.Id);
                entity.Property(a => a.Name).IsRequired();
                entity.HasOne(s => s.Applicant)
                .WithMany(a => a.Skills)
                .HasForeignKey(a=>a.ApplicantId);

            });
        }

        public DbSet<Skill> Skills { get; set; }
        public DbSet<Applicant> Applicants { get; set; }

    }
}
