using System.Collections;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.ProductRepository;

public class ProductRepository : IProductRepository
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<ProductRepository> _logger;
    
    public ProductRepository(ApplicationDbContext context, ILogger<ProductRepository> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task<int> GetProductsCountByType(string productType)
    {
        try
        {
            return productType switch
            {
                "Pizza" => await _context.Products.OfType<Models.Pizza>().CountAsync(),
                "Dessert" => await _context.Products.OfType<Models.Dessert>().CountAsync(),
                _ => throw new Exception("Invalid product productType.")
            };

        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot get products count by productType.");
            throw new Exception("Cannot get products count by productType.");
        }
    }
    
    public async Task<IEnumerable<object>> GetProductsByType(string productType, int page = 1, int pageSize = 10)
    {
        try
        {
            IQueryable<object> products = productType switch
            {
                "Pizza" => _context.Products.OfType<Models.Pizza>(),
                "Dessert" => _context.Products.OfType<Models.Dessert>(),
                _ => throw new Exception("Invalid productType.")
            };

            return await products.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot get products by productType.");
            throw new Exception("Cannot get products by productType.");
        }
    }
    
    public async Task<int> GetProductsCountBySubType(string productType, string subType)
    {
        try
        {
            var productCount = productType switch
            {
                "Pizza" => Enum.TryParse<PizzaType>(subType, out var pizzaSubTypeEnum)
                    ? _context.Products.OfType<Models.Pizza>().Where(p => p.PizzaType == pizzaSubTypeEnum).CountAsync()
                    : throw new Exception("Invalid pizza subType."),
                "Dessert" => Enum.TryParse<DessertType>(subType, out var dessertSubTypeEnum)
                    ? _context.Products.OfType<Models.Dessert>().Where(d => d.DessertType == dessertSubTypeEnum)
                        .CountAsync()
                    : throw new Exception("Invalid dessert subType."),
                _ => throw new Exception("Invalid productType.")
            };

            return await productCount;
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot get products count by subType.");
            throw new Exception("Cannot get products count by subType.");
        }
    }

    public async Task<IEnumerable<object>> GetProductsBySubType(string productType, string subType, int page = 1, int pageSize = 10)
    {
        try
        {
            IQueryable<object> products = productType switch
            {
                "Pizza" => Enum.TryParse<PizzaType>(subType, out var pizzaSubTypeEnum)
                    ? _context.Products.OfType<Models.Pizza>().Where(p => p.PizzaType == pizzaSubTypeEnum)
                    : throw new Exception("Invalid pizza subType."),
                "Dessert" => Enum.TryParse<DessertType>(subType, out var dessertSubTypeEnum)
                    ? _context.Products.OfType<Models.Dessert>().Where(d => d.DessertType == dessertSubTypeEnum)
                    : throw new Exception("Invalid dessert subType."),
                _ => throw new Exception("Invalid productType.")
            };
            
            return await products.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot get products by subType.");
            throw new Exception("Cannot get products by subType.");
        }
    }
}