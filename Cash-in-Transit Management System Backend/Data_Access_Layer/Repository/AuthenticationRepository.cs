using Data_Access_Layer.Interfaces;
using Microsoft.EntityFrameworkCore;
using Shared.Data;
using Shared.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Data_Access_Layer.Repository
{
    public class AuthenticationRepository : IAuthenticationRepository
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
            _db.Users.Add(user);
            await _db.SaveChangesAsync();
        }

        public async Task<bool> AuthorizeAsync(User user, Role requiredRole)
        {
            var dbUser = await _db.Users.FindAsync(user.Id);
            return dbUser?.Role == requiredRole;
        }


        public async Task<User> GetUser(int id)
        {
            return await _db.Users.FindAsync(id);
        }
    }
}
