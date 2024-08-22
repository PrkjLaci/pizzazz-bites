using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Repository.ProductRepository;

namespace PizzazzBitesBackend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IProductRepository _productRepository;
    private readonly ILogger<ProductController> _logger;
    
    public ProductController(ApplicationDbContext context, IProductRepository productRepository, ILogger<ProductController> logger)
    {
        _context = context;
        _productRepository = productRepository;
        _logger = logger;
    }
    
    [HttpGet("products-by-type")]
    public async Task<ActionResult<IEnumerable<Product>>> GetProductsByType([FromQuery] string productType, [FromQuery] int page, [FromQuery] int pageSize)
    {
        try
        {
            var products = await _productRepository.GetProductsByType(productType, page, pageSize);
            return Ok(new
            {
                message = $"{productType} products found successfully.",
                data = products,
                count = await _productRepository.GetProductsCountByType(productType)
            });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find products by productType.");
            return NotFound(new { message = "Can't find products by productType." });
        }
    }

    [HttpGet("products-by-sub-type")]
    public async Task<ActionResult<IEnumerable<Product>>> GetProductsBySubType([FromQuery] string productType,
        [FromQuery] string subType, [FromQuery] int page, [FromQuery] int pageSize)
    {
        try
        {
            var products = await _productRepository.GetProductsBySubType(productType, subType, page, pageSize);
            return Ok(new
            {
                message = $"{productType} products and subType {subType} found successfully.",
                data = products,
                count = await _productRepository.GetProductsCountBySubType(productType, subType)
            });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find products by productType or subType.");
            return NotFound(new { message = "Can't find products by productType or subType." });
        }
    }
    
    [HttpGet("new-products")]
    public async Task<ActionResult<IEnumerable<Product>>> GetNewProducts()
    {
        try
        {
            var products = await _productRepository.GetNewProducts();
            return Ok(new
            {
                message = "New products found successfully.",
                data = products
            });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find new products.");
            return NotFound(new { message = "Can't find new products." });
        }
    }

}