using Microsoft.AspNetCore.Identity;
using PizzazzBitesBackend.Contracts;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Services.Authentication;

public class AuthService : IAuthService
{
    private readonly UserManager<IdentityUser> _userManager;
    
    public AuthService(UserManager<IdentityUser> userManager)
    {
        _userManager = userManager;
    }
    
    public async Task<AuthResult> RegisterAsync(RegistrationRequest registrationRequest)
    {
        var user = await _userManager.CreateAsync(new User
        {
            FirstName = registrationRequest.FirstName,
            LastName = registrationRequest.LastName,
            Email = registrationRequest.Email,
        }, registrationRequest.Password);

        if (!user.Succeeded)
        {
            return GetFailedRegistration(user, registrationRequest.Email, registrationRequest.FirstName, registrationRequest.LastName);
        }

        return new AuthResult(true, registrationRequest.Email, registrationRequest.FirstName,
            registrationRequest.LastName, "");
    }
    
    private static AuthResult GetFailedRegistration(IdentityResult result, string email, string firstName, string lastName)
    {
        var authResult = new AuthResult(false, email, firstName, lastName, "");

        foreach (var error in result.Errors)
        {
            authResult.ErrorMessages.Add(error.Code, error.Description);
        }

        return authResult;
    }
}