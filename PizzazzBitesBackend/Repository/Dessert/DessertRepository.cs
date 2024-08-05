using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Dessert;

public class DessertRepository : IDessertRepository
{
    private readonly ApplicationDbContext _context;
    
    public DessertRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Models.Dessert>> GetDesserts(int page = 1, int pageSize = 10)
    {
        try
        {
            return await _context.Desserts.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Cannot get desserts.");
        }
    }

    public async Task<IEnumerable<Models.Dessert>> GetNewDesserts()
    {
        try
        {
            return await _context.Desserts.Where(d => d.IsNew).ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Cannot get new desserts.");
        }
    }

    public async Task<IEnumerable<Models.Dessert>> GetDessertsByType(DessertType dessertType, int page, int pageSize)
    {
        try
        {
            return await _context.Desserts.Where(d => d.DessertType == dessertType).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception($"Cannot get desserts by {dessertType} type.");
        }
    }

    public async Task<int> GetDessertsCount()
    {
        try
        {
            return await _context.Desserts.CountAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Cannot get desserts count.");
        }
    }

    public async Task<int> GetDessertsCountByType(DessertType dessertType)
    {
        try
        {
            return await _context.Desserts.Where(d => d.DessertType == dessertType).CountAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception($"Cannot get desserts count by {dessertType} type.");
        }
    }
}