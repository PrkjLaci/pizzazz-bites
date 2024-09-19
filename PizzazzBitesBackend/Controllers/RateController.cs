using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Repository.Rating;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RateController : ControllerBase
{
    private readonly IRatingRepository _ratingRepository;
    private readonly ApplicationDbContext _context;
    private readonly ILogger<RateController> _logger;

    public RateController(IRatingRepository ratingRepository, ILogger<RateController> logger, ApplicationDbContext context)
    {
        _ratingRepository = ratingRepository;
        _logger = logger;
        _context = context;
    }
    
    [HttpPost("add-rating")]
    public async Task<IActionResult> AddRating([FromQuery] int productId, [FromQuery] int value)
    {
        try
        {
            var updatedProduct = await _context.Products.FindAsync(productId);
            await _ratingRepository.AddRating(productId, value);
            return Ok(new { message = "Rating added successfully.", data = updatedProduct });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot add rating.");
            return BadRequest(new { message = "Cannot add rating." });
        }
    }
}