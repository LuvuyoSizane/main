using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Access_Layer.Interfaces
{
    public interface IRouteService
    {

        public Task<IEnumerable<Route>> GetAllRoutes();
        public Task AddRoute(Route route);
        public Task DeleteRoute(int id);

        public Task<Route> GetRoute(int id);
    }
}
