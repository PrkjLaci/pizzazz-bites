using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Models.Cart;

namespace PizzazzBitesBackend.Repository.Cart;

public class CartRepository : ICartRepository
{
    private readonly ApplicationDbContext _context;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ILogger<CartRepository> _logger;
    private string UserId => _httpContextAccessor.HttpContext.User.FindAll(ClaimTypes.NameIdentifier).Last().Value;
    private IEnumerable<Product> Products => _context.Products;
    
    public CartRepository(ApplicationDbContext context, IHttpContextAccessor httpContextAccessor, ILogger<CartRepository> logger)
    {
        _context = context;
        _httpContextAccessor = httpContextAccessor;
        _logger = logger;
    }
    
    public async Task AddProductToCart(int productId, int quantity)
    {
        var product = await _context.Products.FindAsync(productId);
        if (product == null)
        {
            _logger.LogError($"Product with id {productId} not found");
            throw new ArgumentException($"Product with id {productId} not found");
        }

        var cart = await _context.Carts.Include(c => c.CartProducts).FirstOrDefaultAsync(c => c.UserId == UserId);
        var cartProduct = cart?.CartProducts.FirstOrDefault(cp => cp.ProductId == productId);

        if (cartProduct != null)
        {
            cartProduct.Quantity += quantity;
        }
        else
        {
            cart?.CartProducts.Add(new CartProduct
            {
                Product = product,
                Quantity = quantity,
            });
        }
        
        await _context.SaveChangesAsync();
    }
    
    public async Task<IEnumerable<CartProduct>?> GetProductsInCart()
    {
        var cart = await _context.Carts.Include(c => c.CartProducts).ThenInclude(cartProduct => cartProduct.Product).FirstOrDefaultAsync(c => c.UserId == UserId);
        return cart?.CartProducts;
    }

    public async Task DecreaseProductQuantityInCart(int productId)
    {
        var cart = await _context.Carts.Include(c => c.CartProducts).FirstOrDefaultAsync(c => c.UserId == UserId);
        var cartProduct = cart?.CartProducts.FirstOrDefault(cp => cp.ProductId == productId);
        if (cartProduct != null)
        {
            cartProduct.Quantity--;
        }
        
        if (cartProduct.Quantity == 0)
        {
            cart?.CartProducts.Remove(cartProduct);
        }
        
        await _context.SaveChangesAsync();
    }

    public async Task RemoveProductFromCart(int productId)
    {
        var cart = await _context.Carts.Include(c => c.CartProducts).FirstOrDefaultAsync(c => c.UserId == UserId);
        var cartProduct = cart?.CartProducts.FirstOrDefault(cp => cp.ProductId == productId);
        if (cartProduct != null )
        {
            cart.CartProducts.Remove(cartProduct);
        }
        
        await _context.SaveChangesAsync();
    }
}