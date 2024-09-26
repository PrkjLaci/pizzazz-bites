namespace PizzazzBitesBackend.Repository.Order;

public interface IOrderRepository
{
    public Task<Models.Order> AddOrder(Models.Order order);
    public Task<ICollection<Models.Order>> GetOrdersByUser();
}