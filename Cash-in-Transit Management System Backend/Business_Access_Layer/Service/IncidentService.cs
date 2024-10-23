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
    public class IncidentService:IIncidentService
    {
        private readonly AppDBContext _db;
        private readonly IIncidentRepository _incidentRepository;

        public IncidentService(AppDBContext db, IIncidentRepository incidentRepository)
        {
            _db = db;
            _incidentRepository = incidentRepository;
        }


        public async Task AddIncident(Incident incident)
        {
           

            await _incidentRepository.AddIncident(incident);
        }


        public async Task DeleteIncident(int id)
        {


            await _incidentRepository.DeleteIncident(id);
        }


        public async Task EditIncident(Incident incident)
        {


            await _incidentRepository.EditIncident(incident);
        }

        public async Task<Incident> GetIncident(int id)
        {
            return await _incidentRepository.GetIncident(id);
        }

        public async Task<IEnumerable<Incident>> GetAllIncidents()
        {
            return await _incidentRepository.GetAllIncidents(); 
        }


    }
}
