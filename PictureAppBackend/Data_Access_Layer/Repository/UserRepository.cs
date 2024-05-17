using Data_Access_Layer.Interface;
using Shared.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDBContext _db;

        public UserRepository(AppDBContext db)
        {
            _db = db;
        }

        public User Login(string email, string password)
        {
            User user = null;

            foreach (var existinguser in _db.Users) { 
                if(existinguser.Email== email && existinguser.Password == password)
                {
                    user = existinguser;
                }
            }
            return user;
        }
    }
}
