using Business_Access_Layer.Interfaces;
using Data_Access_Layer.Interfaces;
using Data_Access_Layer.Repository;
using Microsoft.EntityFrameworkCore;
using Shared.Data;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Access_Layer.Service
{
    public class SchedulingService:ISchedulingService
    {
        private readonly AppDBContext _db;
        private readonly ISchedulingRepository _schedulingRepository;

        public SchedulingService(AppDBContext db, ISchedulingRepository schedulingRepository)
        {
            _db = db;
            _schedulingRepository = schedulingRepository;
        }

       
        public async Task AddDelivery(Delivery delivery)
        {
            Delivery existingDelivery = await _db.Deliveries.FirstOrDefaultAsync(d => d.Location == delivery.Location &&d.ScheduledTime==delivery.ScheduledTime);

            if (existingDelivery != null)
            {
                throw new Exception("Delivery already exists in the system");
            }

            await _schedulingRepository.AddDelivery(delivery);
        }

        public async Task AddPickup(Pickup pickup)
        {
            Pickup existingPickup = await _db.Pickups.FirstOrDefaultAsync(p => p.Location == pickup.Location && p.ScheduledTime == pickup.ScheduledTime);

            if (existingPickup != null)
            {
                throw new Exception("Pickup already exists in the system");
            }

            await _schedulingRepository.AddPickup(pickup);
        }

        public async Task<IEnumerable<Delivery>> GetAllDeliveries()
        {
            return await _schedulingRepository.GetAllDeliveries();
        }

        public async Task<IEnumerable<Pickup>> GetAllPickups()
        {
            return await _schedulingRepository.GetAllPickups();
        }

        public async Task<Delivery> GetDelivery(int id)
        {
            return await _schedulingRepository.GetDelivery(id);
        }

        public async Task<Pickup> GetPickup(int id)
        {
            return await _schedulingRepository.GetPickup(id);
        }


        public async Task DeleteDelivery(int id)
        {
            
            await _schedulingRepository.DeleteDelivery(id);
        }

        public async Task DeletePickup(int id)
        {

            await _schedulingRepository.DeletePickup(id);
        }
    }
}
