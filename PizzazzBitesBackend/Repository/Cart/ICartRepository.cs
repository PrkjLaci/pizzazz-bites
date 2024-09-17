using PizzazzBitesBackend.Models.Cart;

namespace PizzazzBitesBackend.Repository.Cart;

public interface ICartRepository
{
    Task AddProductToCart(int productId, int quantity);
    Task<IEnumerable<CartProduct>?> GetProductsInCart();
    Task DecreaseProductQuantityInCart(int productId);
    Task IncreaseProductQuantityInCart(int productId);
    Task RemoveProductFromCart(int productId);
}