using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Contracts;
using PizzazzBitesBackend.Data;

namespace PizzazzBitesBackend.Repository.User;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<UserRepository> _logger;
    
    public UserRepository(ApplicationDbContext context, ILogger<UserRepository> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    public async Task<UserDataResponse> GetUserByEmail(string email)
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            return new UserDataResponse(email, user.FirstName, user.LastName, user.PhoneNumber);
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot get user by email.");
            throw new Exception("Cannot get user by email.");
        }
    }

    public async Task UpdateUserPersonalInfo(UserDataResponse userData)
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == userData.email);
            
            user.FirstName = userData.FirstName;
            user.LastName = userData.LastName;
            user.PhoneNumber = userData.phoneNumber;
            
            _context.Users.Update(user);
        await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot update user personal info.");
            throw new Exception("Cannot update user personal info.");
        }
    }
}