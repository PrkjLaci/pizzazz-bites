using System.Security.Claims;
using PizzazzBitesBackend.Data;

namespace PizzazzBitesBackend.Repository.Rating;

public class RatingRepository : IRatingRepository
{
    private readonly ApplicationDbContext _context;
    private readonly IHttpContextAccessor _contextAccessor;
    private readonly ILogger<RatingRepository> _logger;
    private string UserId => _contextAccessor.HttpContext.User.FindAll(ClaimTypes.NameIdentifier).Last().Value;
    
    public RatingRepository(ApplicationDbContext context, IHttpContextAccessor contextAccessor, ILogger<RatingRepository> logger)
    {
        _context = context;
        _contextAccessor = contextAccessor;
        _logger = logger;
    }
    
    public async Task AddRating(int productId, int value)
    {
        var user = await _context.Users.FindAsync(UserId);
        var product = await _context.Products.FindAsync(productId);
        
        if (user == null)
        {
            _logger.LogError($"User with id {UserId} not found");
            throw new Exception($"User with id {UserId} not found");
        }
        
        if (product == null)
        {
            _logger.LogError($"Product with id {productId} not found");
            throw new Exception($"Product with id {productId} not found");
        }
        
        if(_context.Ratings.Any(r => r.UserId == UserId && r.ProductId == productId))
        {
            var oldRating = await _context.Ratings.FindAsync(UserId, productId);
            if (oldRating != null) _context.Ratings.Remove(oldRating);
            product.RatingCount--;
            await _context.SaveChangesAsync();

        }
        
        product.RatingCount++;
        product.Rating = (product.Rating * (product.RatingCount - 1) + value) / product.RatingCount;
        
        var rating = new Models.Rating { User = user, Product = product, Value = value };
        await _context.Ratings.AddAsync(rating);
        await _context.SaveChangesAsync();
    }
}
