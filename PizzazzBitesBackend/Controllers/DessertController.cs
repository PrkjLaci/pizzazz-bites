using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Models.Enum;
using PizzazzBitesBackend.Repository.Dessert;

namespace PizzazzBitesBackend.Controllers;
[ApiController]
[Route("[controller]")]
public class DessertController : ControllerBase
{
    private readonly ILogger<DessertController> _logger;
    private readonly IDessertRepository _dessertRepository;
    
    public DessertController(ILogger<DessertController> logger, IDessertRepository dessertRepository)
    {
        _logger = logger;
        _dessertRepository = dessertRepository;
    }
    
    [HttpGet("/Desserts")]
    public async Task<ActionResult<IEnumerable<Dessert>>> GetDesserts([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {
        try
        {
            return Ok(new
            {
                message = "Desserts found successfully.",
                data = await _dessertRepository.GetDesserts(page, pageSize),
                count = await _dessertRepository.GetDessertsCount()
            });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find desserts.");
            return NotFound(new { message = "Can't find desserts." });
        }
    }
    
    [HttpGet("/Desserts/new")]
    public async Task<ActionResult<IEnumerable<Dessert>>> GetNewDesserts()
    {
        try
        {
            return Ok(await _dessertRepository.GetNewDesserts());
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find new desserts.");
            return NotFound(new { message = "Can't find new desserts." });
        }
    }
    
    [HttpGet("/Desserts/type/{dessertType}")]
    public async Task<ActionResult<IEnumerable<Dessert>>> GetDessertsByType(string dessertTypeString, [FromQuery] int page, [FromQuery] int pageSize)
    {
        try
        {
            if(Enum.TryParse<DessertType>(dessertTypeString, out var dessertType))
            {
                return Ok(new
                {
                    message = "Desserts found successfully.",
                    data = await _dessertRepository.GetDessertsByType(dessertType, page, pageSize),
                    count = await _dessertRepository.GetDessertsCountByType(dessertType)
                });
            }
            else
            {
                return BadRequest(new { message = "Invalid dessert type." });
            }
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find desserts.");
            return NotFound(new { message = "Can't find desserts." });
        }
    }
}