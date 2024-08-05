using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Dessert;

public interface IDessertRepository
{
    Task<IEnumerable<Models.Dessert>> GetDesserts(int page, int pageSize);
    Task<IEnumerable<Models.Dessert>> GetNewDesserts();
    Task<IEnumerable<Models.Dessert>> GetDessertsByType(DessertType dessertType, int page, int pageSize);
    Task<int> GetDessertsCount();
    Task<int> GetDessertsCountByType(DessertType dessertType);
}