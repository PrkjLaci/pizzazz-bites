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

    public async Task<IEnumerable<Models.Pizza>> GetPizzasByType(PizzaType pizzaType)
    {
        try
        {
            return await _context.Pizzas.Where(p => p.PizzaType == pizzaType).ToListAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Cannot get pizzas by type.");
        }
    }
}