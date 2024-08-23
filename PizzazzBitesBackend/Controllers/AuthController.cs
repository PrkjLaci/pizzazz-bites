using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using PizzazzBitesBackend.Contracts;
using PizzazzBitesBackend.Services.Authentication;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    
    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<RegistrationResponse>> Register(RegistrationRequest request)
    {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var result = await _authService.RegisterAsync(request.Email, request.FirstName, request.LastName, request.Password);
        
            if (!result.Success)
            {
                GetAddErrors(result);
                return BadRequest(result);
            }

            return CreatedAtAction(nameof(Register),
                new RegistrationResponse(result.FirstName, result.LastName, result.Email));
    }
    
    private void GetAddErrors(AuthResult result)
    {
        foreach (var error in result.ErrorMessages)
        {
            ModelState.AddModelError(error.Key, error.Value);
        }
    }
}