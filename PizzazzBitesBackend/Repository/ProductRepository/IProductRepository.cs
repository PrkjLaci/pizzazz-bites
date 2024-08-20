using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Repository.ProductRepository;

public interface IProductRepository
{
    Task<int> GetProductsCountByType(string productType);
    Task<IEnumerable<object>> GetProductsByType(string productType, int page = 1, int pageSize = 10);
    Task<int> GetProductsCountBySubType(string productType, string subType);

    Task<IEnumerable<object>>
        GetProductsBySubType(string productType, string subType, int page = 1, int pageSize = 10);
}