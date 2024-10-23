using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Interfaces
{
    public interface IIncidentRepository
    {
        public Task<IEnumerable<Incident>> GetAllIncidents();
        public Task AddIncident(Incident incident);
        public Task EditIncident(Incident incident);
        public Task DeleteIncident(int id);

        public Task<Incident> GetIncident(int id);
    }
}
