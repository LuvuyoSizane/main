using Shared.Models;
using System.Linq;
using System.Threading.Tasks;
using Shared.Data;
using Business_Access_Layer.Interfaces;
using Data_Access_Layer.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Business_Access_Layer.Service
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly AppDBContext _db;
        private readonly IAuthenticationRepository _authenticationRepository;

        public AuthenticationService(AppDBContext db, IAuthenticationRepository authenticationRepository)
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
            // Check if the user already exists
            User existingUser = await _db.Users.FirstOrDefaultAsync(u => u.Username == user.Username && u.Password == user.Password);

            if (existingUser != null)
            {
                throw new Exception("User already exists in the system");
            }

            await _authenticationRepository.RegisterAsync(user);
    
        }

        public async Task<bool> AuthorizeAsync(User user, Role requiredRole)
        {
            return await _authenticationRepository.AuthorizeAsync(user, requiredRole);
        }
    }
}
