using CITBackend.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace CITBackend.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext()
        {
        }

        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
    }
}
