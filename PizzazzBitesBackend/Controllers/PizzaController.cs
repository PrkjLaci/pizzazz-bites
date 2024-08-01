using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Models.Enum;
using PizzazzBitesBackend.Repository.Pizza;

namespace PizzazzBitesBackend.Controllers;
[ApiController]
[Route("[controller]")]
public class PizzaController : ControllerBase
{
    private readonly ILogger<PizzaController> _logger;
    private readonly IPizzaRepository _pizzaRepository;
    
    public PizzaController(ILogger<PizzaController> logger, IPizzaRepository pizzaRepository)
    {
        _logger = logger;
        _pizzaRepository = pizzaRepository;
    }
    
    [HttpGet("/Pizzas")]
    public async Task<ActionResult<IEnumerable<Pizza>>> GetPizzas([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {
        try
        {
            return Ok(new { message = "Pizzas found successfully.", data = await _pizzaRepository.GetPizzas(page, pageSize)});
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find pizzas.");
            return NotFound(new { message = "Can't find pizzas." });
        }
    }

    [HttpGet("/Pizzas/new")]
    public async Task<ActionResult<IEnumerable<Pizza>>> GetNewPizzas()
    {
        try
        {
            return Ok(await _pizzaRepository.GetNewPizzas());
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find new pizzas.");
            return NotFound(new { message = "Can't find new pizzas." });
        }
    }
    
    [HttpGet("/Pizzas/type/{pizzaType}")]
    public async Task<ActionResult<IEnumerable<Pizza>>> GetPizzasByType(string pizzaTypeString, [FromQuery] int page, [FromQuery] int pageSize)
    {
        try
        {
            if(Enum.TryParse<PizzaType>(pizzaTypeString, out var pizzaType))
            {
                return Ok(new { message = "Pizzas found successfully.", data = await _pizzaRepository.GetPizzasByType(pizzaType, page, pageSize) });
            }
            return BadRequest(new { message = "Invalid pizza type." });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find pizzas by type.");
            return NotFound(new { message = "Can't find pizzas by type." });
        }
    }
    
    
}