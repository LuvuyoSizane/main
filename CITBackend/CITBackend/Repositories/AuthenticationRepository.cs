using CITBackend.Model;
using CITBackend.Data;
using System.Data;
using System;
using Microsoft.EntityFrameworkCore;

namespace CITBackend.Repositories
{
    public class AuthenticationRepository
    {
        private readonly AppDBContext _db;

        public AuthenticationRepository(AppDBContext db)
        {
            _db = db;
        }

        public async Task<User> LoginAsync(string username, string password)
        {
            // Find the user with the matching username and password
            User user = await _db.Users.FirstOrDefaultAsync(u => u.Username == username && u.Password == password);

            // Check if user is found
            if (user == null)
            {
                // Handle user not found scenario
                throw new UnauthorizedAccessException("Invalid username or password.");
            }

            return user;
        }

        public async Task RegisterAsync(User user)
        {
            // Add the new user to the database
            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();
        }

        public async Task<bool> AuthorizeAsync(User user, Role requiredRole)
        {
            return await Task.FromResult(user.Role == requiredRole);
        }
    }
}
