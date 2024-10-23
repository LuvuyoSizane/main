using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Interfaces
{
    public interface IAuthenticationRepository
    {
        public Task<User> LoginAsync(string username, string password);

        public  Task RegisterAsync(User user);

        public Task<bool> AuthorizeAsync(User user, Role requiredRole);

    }
}
