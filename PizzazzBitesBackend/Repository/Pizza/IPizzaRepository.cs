using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Pizza;

public interface IPizzaRepository
{
    Task<IEnumerable<Models.Pizza>> GetNewPizzas();
    Task<IEnumerable<Models.Pizza>> GetPizzasByType(PizzaType pizzaType);
}