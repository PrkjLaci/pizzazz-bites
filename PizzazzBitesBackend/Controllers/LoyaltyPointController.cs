using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Repository.LoyaltyPoint;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LoyaltyPointController : ControllerBase
{
    private readonly ILoyaltyPointRepository _loyaltyPointRepository;
    private readonly ILogger<LoyaltyPointController> _logger;

    public LoyaltyPointController(ILoyaltyPointRepository loyaltyPointRepository, ILogger<LoyaltyPointController> logger)
    {
        _loyaltyPointRepository = loyaltyPointRepository;
        _logger = logger;
    }
    
    [Authorize (Roles = "User")]
    [HttpGet("get-loyalty-points")]
    public async Task<ActionResult> GetLoyaltyPoints()
    {
        try
        {
            var loyaltyPoints = await _loyaltyPointRepository.GetLoyaltyPoints();
            return Ok(new { message = "Loyalty points found successfully.", data = loyaltyPoints });
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
            return BadRequest(new { message = e.Message });
        }
    }
    
    [Authorize (Roles = "User")]
    [HttpPost("use-loyalty-points")]
    public async Task<ActionResult>  UseLoyaltyPoints([FromBody] decimal pointsToUse)
    {
        try
        {
            await _loyaltyPointRepository.UseLoyaltyPoint(pointsToUse);
            return Ok(new { message = "Loyalty points used successfully." });
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
            return BadRequest(new { message = e.Message });
        }
    }
}