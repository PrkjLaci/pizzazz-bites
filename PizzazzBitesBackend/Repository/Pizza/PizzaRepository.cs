using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Pizza;

public class PizzaRepository : IPizzaRepository
{
    private readonly ApplicationDbContext _context;
    
    public PizzaRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Models.Pizza>> GetPizzas(int page = 1, int pageSize = 10)
    {
        try
        {
            return await _context.Pizzas.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Cannot get pizzas.");
        }
    }
    
    public async Task<IEnumerable<Models.Pizza>> GetNewPizzas()
    {
        try
        {
            return await _context.Pizzas.Where(p => p.IsNew).ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Cannot get new pizzas.");
        }
    }

    public async Task<IEnumerable<Models.Pizza>> GetPizzasByType(PizzaType pizzaType, int page = 1, int pageSize = 10)
    {
        try
        {
            return await _context.Pizzas.Where(p => p.PizzaType == pizzaType).Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Cannot get pizzas by type.");
        }
    }
}