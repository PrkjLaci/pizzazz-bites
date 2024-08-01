using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Pizza;

public interface IPizzaRepository
{
    Task<IEnumerable<Models.Pizza>> GetPizzas(int page, int pageSize);
    Task<IEnumerable<Models.Pizza>> GetNewPizzas();
    Task<IEnumerable<Models.Pizza>> GetPizzasByType(PizzaType pizzaType, int page, int pageSize);
}