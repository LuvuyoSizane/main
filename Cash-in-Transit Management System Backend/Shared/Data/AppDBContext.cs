using Shared.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Data
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

        public DbSet<Delivery> Deliveries { get; set; }
        public DbSet<Pickup> Pickups { get; set; }

        public DbSet<Route> Routes { get; set; }

        public DbSet<Vehicle> Vehicles { get; set; }

        public DbSet<Incident> Incidents { get; set; }


    }
}
