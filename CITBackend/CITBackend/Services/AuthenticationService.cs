using CITBackend.Model;
using CITBackend.Repositories;
using Microsoft.AspNetCore.Authentication;
using System.Data;
using System;
using CITBackend.Data;
using Microsoft.EntityFrameworkCore;

namespace CITBackend.Services
{
    public class AuthenticationService 
    {
        private readonly AppDBContext _db;
        private readonly AuthenticationRepository _authenticationRepository;

        public AuthenticationService(AuthenticationRepository authenticationRepository, AppDBContext db)
        {
            _db = db;
            _authenticationRepository = authenticationRepository;
        }

        public async Task<User> LoginAsync(string username, string password)
        {
            return await _authenticationRepository.LoginAsync(username, password);
        }

        public async Task RegisterAsync(User user)
        {
            // Find the user with the matching username
            User existingUser = await _db.Users.FirstOrDefaultAsync(u => u.Username == user.Username);

            // Check if user is found
            if (existingUser != null)
            {
                // Handle user already exists scenario
                throw new Exception("User already exists in the system");
            }
            else
            {
                await _authenticationRepository.RegisterAsync(user);
            }
        }

        public async Task<bool> AuthorizeAsync(User user, Role requiredRole)
        {
            return await Task.FromResult(user.Role == requiredRole);
        }
    }
}
