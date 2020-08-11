using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.api.Models;

namespace DatingApp.api.Data
{
    public interface IDatingRepository
    {
        void Add<T>(T entiry) where T: class;
        void Delete<T>(T entiry) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}