using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Interfaces
{
    public interface IRouteRepository
    {
        public Task<IEnumerable<Route>> GetAllRoutes();
        public Task AddRoute(Route route);

        public Task DeleteRoute(int id);

        public Task<Route> GetRoute(int id);
    }
}
