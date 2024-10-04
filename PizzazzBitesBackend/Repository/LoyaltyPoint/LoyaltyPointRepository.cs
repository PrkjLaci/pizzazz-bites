using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;

namespace PizzazzBitesBackend.Repository.LoyaltyPoint;

public class LoyaltyPointRepository : ILoyaltyPointRepository
{
    private readonly ApplicationDbContext _context;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ILogger<LoyaltyPointRepository> _logger;

    public LoyaltyPointRepository(ApplicationDbContext context, IHttpContextAccessor httpContextAccessor, ILogger<LoyaltyPointRepository> logger)
    {
        _context = context;
        _httpContextAccessor = httpContextAccessor;
        _logger = logger;
    }

    public async Task AddLoyaltyPoint(decimal pointsAfterOrder)
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u =>
                _httpContextAccessor.HttpContext != null && u.Id == _httpContextAccessor.HttpContext.User
                    .FindAll(ClaimTypes.NameIdentifier).Last().Value);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            user.LoyaltyPoints += pointsAfterOrder;
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message, "Can't add loyalty points.");
            throw new Exception(e.Message);
        }
    }

    public async Task<decimal> GetLoyaltyPoints()
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u =>
                _httpContextAccessor.HttpContext != null && u.Id == _httpContextAccessor.HttpContext.User
                    .FindAll(ClaimTypes.NameIdentifier).Last().Value);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            return user.LoyaltyPoints;
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message, "Can't get loyalty points.");
            throw new Exception(e.Message);
        }
    }

    public async Task UseLoyaltyPoint(decimal pointsToUse)
    {
        try
        {
            var user = await _context.Users.FirstOrDefaultAsync(u =>
                _httpContextAccessor.HttpContext != null && u.Id == _httpContextAccessor.HttpContext.User
                    .FindAll(ClaimTypes.NameIdentifier).Last().Value);
            if (user == null)
            {
                throw new Exception("User not found");
            }
            
            if (user.LoyaltyPoints < pointsToUse)
            {
                throw new Exception("Not enough loyalty points");
            }
            
            user.LoyaltyPoints -= pointsToUse;
            _context.Users.Update(user);
            await _context.SaveChangesAsync();

        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}