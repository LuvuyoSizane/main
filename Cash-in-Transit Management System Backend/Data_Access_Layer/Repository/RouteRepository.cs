using Data_Access_Layer.Interfaces;
using Microsoft.EntityFrameworkCore;
using Shared.Data;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Repository
{
    public class RouteRepository:IRouteRepository
    {
        private readonly AppDBContext _db;

        public RouteRepository(AppDBContext db)
        {
            _db = db;
        }

        public async Task AddRoute(Route route)
        {
            _db.Routes.Add(route);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Route>> GetAllRoutes()
        {
            return await _db.Routes.ToListAsync();
        }

        public async Task DeleteRoute(int id)
        {
            var route = _db.Routes.Find(id);
            if (route != null)
            {
                _db.Routes.Remove(route);
                await _db.SaveChangesAsync();
            }
        }

        public async Task<Route> GetRoute(int id)
        {
            return await _db.Routes.FindAsync(id);
        }
    }
}
