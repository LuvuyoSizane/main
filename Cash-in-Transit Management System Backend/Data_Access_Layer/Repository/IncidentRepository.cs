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
    public class IncidentRepository:IIncidentRepository
    {
        private readonly AppDBContext _db;

        public IncidentRepository(AppDBContext db)
        {
            _db = db;
        }

        public async Task AddIncident(Incident incident)
        {
            _db.Incidents.Add(incident);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Incident>> GetAllIncidents()
        {
            return await _db.Incidents.OrderByDescending(incident => incident.Id).ToListAsync();
        }

        public async Task DeleteIncident(int id)
        {
            var incident = _db.Incidents.Find(id);
            if (incident != null)
            {
                _db.Incidents.Remove(incident);
                await _db.SaveChangesAsync();
            }
        }

        public async Task EditIncident(Incident incident)
        {
            _db.Incidents.Update(incident);
            await _db.SaveChangesAsync();
        }

        public async Task<Incident> GetIncident(int id)
        {
            return await _db.Incidents.FindAsync(id);
        }

    }
}
