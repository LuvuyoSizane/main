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
    public class SchedulingRepository : ISchedulingRepository
    {
        private readonly AppDBContext _db;

        public SchedulingRepository(AppDBContext db)
        {
            _db = db;
        }

        public async Task AddDelivery(Delivery delivery)
        {
            _db.Deliveries.Add(delivery);
            await _db.SaveChangesAsync();
        }

        public async Task AddPickup(Pickup pickup)
        {
            _db.Pickups.Add(pickup);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Delivery>> GetAllDeliveries()
        {
            return await _db.Deliveries.ToListAsync();
        }

        public async Task<IEnumerable<Pickup>> GetAllPickups()
        {
            return await _db.Pickups.ToListAsync();
        }

        public async Task<Pickup> GetPickup(int id)
        {
            return await _db.Pickups.FindAsync(id);
        }

        public async Task<Delivery> GetDelivery(int id)
        {
            return await _db.Deliveries.FindAsync(id);
        }

        public async Task DeleteDelivery(int id)
        {
            var delivery = _db.Deliveries.Find(id);
            if (delivery != null)
            {
                _db.Deliveries.Remove(delivery);
                await _db.SaveChangesAsync();
            }
        }
        public async Task DeletePickup(int id)
        {
            var pickup = _db.Pickups.Find(id);
            if (pickup != null)
            {
                _db.Pickups.Remove(pickup);
                await _db.SaveChangesAsync();
            }
        }
    }

}
