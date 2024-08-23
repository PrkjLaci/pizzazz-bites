using Microsoft.AspNetCore.Identity;
using PizzazzBitesBackend.Contracts;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Services.Authentication;

public class AuthService : IAuthService
{
    private readonly UserManager<User> _userManager;
    
    public AuthService(UserManager<User> userManager)
    {
        _userManager = userManager;
    }
    
    public async Task<AuthResult> RegisterAsync(string email, string firstName, string lastName, string password)
    {
        var user = await _userManager.CreateAsync(new User
        {
            UserName = email,
            FirstName = firstName,
            LastName = lastName,
            Email = email,
        }, password);

        if (!user.Succeeded)
        {
            return FailedRegistration(user, email, firstName, lastName);
        }

        return new AuthResult(true, email, firstName, lastName, "");
    }
    
    private static AuthResult FailedRegistration(IdentityResult result, string email, string firstName, string lastName)
    {
        var authResult = new AuthResult(false, email, firstName, lastName, "");

        foreach (var error in result.Errors)
        {
            authResult.ErrorMessages.Add(error.Code, error.Description);
        }

        return authResult;
    }
}