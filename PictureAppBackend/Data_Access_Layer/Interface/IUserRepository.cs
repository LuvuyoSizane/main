using Shared.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.Interface
{
    public interface IUserRepository
    {
        public User Login(string email, string password);
    }
}
