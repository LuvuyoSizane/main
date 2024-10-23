using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Interfaces
{
    public interface ISchedulingRepository
    {
        public Task<IEnumerable<Pickup>> GetAllPickups();
        public Task AddPickup(Pickup pickup);
        public Task<IEnumerable<Delivery>> GetAllDeliveries();
        public Task AddDelivery(Delivery delivery);
        public Task<Pickup> GetPickup(int id);

        public Task<Delivery> GetDelivery(int id);

        public Task DeleteDelivery(int id);

        public Task DeletePickup(int id);

    }
}
