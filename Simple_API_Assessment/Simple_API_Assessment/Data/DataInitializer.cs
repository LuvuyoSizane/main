using Simple_API_Assessment.Models;

namespace Simple_API_Assessment.Data
{
    public class DataInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();

                context.Database.EnsureCreated();
                //Applicant
                if(!context.Applicants.Any())
                {
                    context.Applicants.Add(new Applicant()
                    {
                        Id = 1,
                       Name = "Luvuyo Sizane", 
                    });

                    context.SaveChanges();
                }
                //Skill
                if (!context.Skills.Any())
                {
                    context.Skills.AddRange(new List<Skill>() { 
                    new Skill()
                    {
                        Id= 1,
                        Name = "Coding",
                        ApplicantId = 1,
                    },
                    new Skill()
                    {
                        Id= 2,
                        Name = "Logical",
                        ApplicantId = 1,
                    },
                    new Skill()
                    {
                        Id= 3,
                        Name = "Team Player",
                        ApplicantId = 1,
                    }

                    });


                    context.SaveChanges();

                }
            }
        }
    }
}
