using Business_Access_Layer.Interfaces;
using Data_Access_Layer.Interfaces;
using Microsoft.EntityFrameworkCore;
using Shared.Data;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Business_Access_Layer.Service
{
    public class ManagementService : IManagementService
    {
        private readonly AppDBContext _db;
        private readonly IManagementRepository _managementRepository;

        public ManagementService(AppDBContext db, IManagementRepository managementRepository)
        {
            _db = db;
            _managementRepository = managementRepository;
        }

        public async Task AddUser(User user)
        {
            // Check if the user already exists
            User existingUser = await _db.Users.FirstOrDefaultAsync( u => u.Username == user.Username && u.Password == user.Password);

            if (existingUser != null)
            {
                throw new Exception("Personnel already exists in the system");
            }

            await _managementRepository.AddUser(user);
        }

        public async Task AddVehicle(Vehicle vehicle)
        {
            // Check if the user already exists
            Vehicle existingVehicle = await _db.Vehicles.FirstOrDefaultAsync(v => v.RegistrationNumber == vehicle.RegistrationNumber && v.Type == vehicle.Type);

            if (existingVehicle != null)
            {
                throw new Exception("Vehicle already exists in the system");
            }

            await _managementRepository.AddVehicle(vehicle);
        }

        public async Task DeleteUser(int id)
        {
            await _managementRepository.DeleteUser(id);
        }

        public async Task DeleteVehicle(int id)
        {
            await _managementRepository.DeleteVehicle(id);
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _managementRepository.GetAllUsers();
        }

        public async Task<IEnumerable<Vehicle>> GetAllVehicles()
        {
            return await _managementRepository.GetAllVehicles();
        }

        public async Task<User> GetUser(int id)
        {
            return await _managementRepository.GetUser(id);
        }

        public async Task<Vehicle> GetVehicle(int id)
        {
            return await _managementRepository.GetVehicle(id);
        }

        public async Task UpdateUser(User user)
        {
            await _managementRepository.UpdateUser(user);
        }

        public async Task UpdateVehicle(Vehicle vehicle)
        {
            await _managementRepository.UpdateVehicle(vehicle);
        }
    }
}
