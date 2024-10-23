﻿using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Access_Layer.Interfaces
{
    public interface IIncidentService
    {
        public Task<IEnumerable<Incident>> GetAllIncidents();
        public Task AddIncident(Incident incident);
        public Task EditIncident(Incident incident);
        public Task DeleteIncident(int id);
        public Task<Incident> GetIncident(int id);
    }
}
