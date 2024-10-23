using Data_Access_Layer.Interfaces;
using Shared.Data;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Data_Access_Layer.Repository
{
    public class ManagementRepository : IManagementRepository
    {
        private readonly AppDBContext _db;

        public ManagementRepository(AppDBContext db)
        {
            _db = db;
        }

        public async Task AddUser(User user)
        {
             _db.Users.Add(user);
            await _db.SaveChangesAsync();
        }

        public async Task AddVehicle(Vehicle vehicle)
        {
             _db.Vehicles.Add(vehicle);
            await _db.SaveChangesAsync();
        }

        public async Task DeleteUser(int id)
        {
            var user =  _db.Users.Find(id);
            if (user != null)
            {
                _db.Users.Remove(user);
                await _db.SaveChangesAsync();
            }
        }

        public async Task DeleteVehicle(int id)
        {
            var vehicle =  _db.Vehicles.Find(id);
            if (vehicle != null)
            {
                _db.Vehicles.Remove(vehicle);
                await _db.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _db.Users.ToListAsync();
        }

        public async Task<IEnumerable<Vehicle>> GetAllVehicles()
        {
            return await _db.Vehicles.ToListAsync();
        }

        public async Task<User> GetUser(int id)
        {
            return await _db.Users.FindAsync(id);
        }

        public async Task<Vehicle> GetVehicle(int id)
        {
            return await _db.Vehicles.FindAsync(id);
        }

        public async Task UpdateUser(User user)
        {
            _db.Users.Update(user);
            await _db.SaveChangesAsync();
        }

        public async Task UpdateVehicle(Vehicle vehicle)
        {
            _db.Vehicles.Update(vehicle);
            await _db.SaveChangesAsync();
        }
    }
}
