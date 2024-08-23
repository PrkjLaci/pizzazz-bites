using PizzazzBitesBackend.Contracts;

namespace PizzazzBitesBackend.Services.Authentication;

public interface IAuthService
{
    Task<AuthResult> RegisterAsync(string email, string firstName, string lastName, string password);
}