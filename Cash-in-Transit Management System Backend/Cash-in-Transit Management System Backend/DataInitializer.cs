using Shared.Data;
using Shared.Models;

namespace Cash_in_Transit_Management_System_Backend
{
    public class DataInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDBContext>();

                context.Database.EnsureCreated();
                //Admin
                if (!context.Users.Any())
                {
                    context.Users.Add(new User()
                    {
                        Username = "Luvuyo",
                        Password ="password",
                        FullName = "Luvuyo Sizane",
                        Role = Role.Admin
                    });

                    context.SaveChanges();
                }
                /*Skill
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
                */
            }
        }
    }
}
