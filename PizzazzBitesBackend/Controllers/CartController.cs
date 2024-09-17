using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models.Cart;
using PizzazzBitesBackend.Repository.Cart;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ICartRepository _cartRepository;
    
    public CartController(ApplicationDbContext context, ICartRepository cartRepository)
    {
        _context = context;
        _cartRepository = cartRepository;
    }
    
    [Authorize (Roles = "User")]
    [HttpPost("add-product-to-cart")]
    public async Task<IActionResult> AddProductToCart([FromQuery] int productId, [FromQuery]int quantity)
    {
        try
        {
            var product = await _context.Products.FindAsync(productId);
            var newCartProduct = new CartProduct { Product = product, ProductId = productId, Quantity = quantity };
            await _cartRepository.AddProductToCart(productId, quantity);
            return Ok(new { message = "Product added to cart successfully.", data = newCartProduct});
        }
        catch (Exception e)
        {
            return BadRequest(new { message = e.Message });
        }
    }
    
    [Authorize (Roles = "User")]
    [HttpGet("get-products-in-cart")]
    public async Task<IActionResult> GetProductsInCart()
    {
        try
        {
            var products = await _cartRepository.GetProductsInCart();
            return Ok( new { data = products, message = "Products in cart retrieved successfully." } );
        }
        catch (Exception e)
        {
            return BadRequest(new { message = e.Message });
        }
    }

    [Authorize (Roles = "User")]
    [HttpPatch("decrease-product-quantity-in-cart")]
    public async Task<IActionResult> DecreaseProductQuantityInCart([FromBody] int productId)
    {
        try
        {
            await _cartRepository.DecreaseProductQuantityInCart(productId);
            return Ok(new { message = "Product quantity decreased successfully." });
        }
        catch (Exception e)
        {
            return BadRequest(new { message = e.Message });
        }
    }

    [Authorize(Roles = "User")]
    [HttpPatch("increase-product-quantity-in-cart")]
    public async Task<IActionResult> IncreaseProductQuantityInCart([FromBody] int productId)
    {
        try
        {
            await _cartRepository.IncreaseProductQuantityInCart(productId);
            return Ok(new { message = "Product quantity increased successfully." });
        }
        catch (Exception e)
        {
            return BadRequest(new { message = e.Message });
        }
    }

    [Authorize (Roles = "User")]
    [HttpDelete("remove-product-from-cart")]
    public async Task<IActionResult> RemoveProductFromCart([FromBody] int productId)
    {
        try
        {
            await _cartRepository.RemoveProductFromCart(productId);
            return Ok(new { message = "Product removed from cart successfully." });
        }
        catch (Exception e)
        {
            return BadRequest(new { message = e.Message });
        }
    }
}