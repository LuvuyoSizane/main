using Business_Access_Layer.Interfaces;
using Data_Access_Layer.Interfaces;
using Data_Access_Layer.Repository;
using Shared.Data;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Access_Layer.Service
{
    public class RouteService:IRouteService
    {
        private readonly AppDBContext _db;
        private readonly IRouteRepository _routeRepository;

        public RouteService(AppDBContext db, IRouteRepository routeRepository)
        {
            _db = db;
            _routeRepository = routeRepository;
        }


        public async Task AddRoute(Route route)
        {
            await _routeRepository.AddRoute(route);
        }


        public async Task<IEnumerable<Route>> GetAllRoutes()
        {
            return await _routeRepository.GetAllRoutes();
        }

        public async Task DeleteRoute(int id)
        {
            await _routeRepository.DeleteRoute(id);
        }

        public async Task<Route> GetRoute(int id)
        {
            return await _routeRepository.GetRoute(id);
        }
    }
}
