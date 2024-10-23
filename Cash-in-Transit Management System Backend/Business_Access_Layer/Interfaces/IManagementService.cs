using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Access_Layer.Interfaces
{
    public interface IManagementService
    {

        public Task AddUser(User user);

        public Task UpdateUser(User user);
        public Task DeleteUser(int id);

        Task<User> GetUser(int id);
        public Task<IEnumerable<User>> GetAllUsers();

        public Task AddVehicle(Vehicle vehicle);

        public Task UpdateVehicle(Vehicle vehicle);
        public Task DeleteVehicle(int id);

        Task<Vehicle> GetVehicle(int id);

        public Task<IEnumerable<Vehicle>> GetAllVehicles();
    }
}
