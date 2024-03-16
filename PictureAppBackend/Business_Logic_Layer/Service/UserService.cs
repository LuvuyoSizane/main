using Business_Logic_Layer.Interfaces;
using Data_Access_Layer.Repository;
using Shared.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business_Logic_Layer.Service
{
    public class UserService: IUserService
    {
        public readonly UserRepository userrepo;
        public UserService(AppDBContext db)
        {

            userrepo = new UserRepository(db);

        }

        public User Login(string email, string password)
        {
            return userrepo.Login(email, password);
        }
    }
}
