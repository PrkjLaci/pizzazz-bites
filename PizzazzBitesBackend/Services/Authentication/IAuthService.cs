using PizzazzBitesBackend.Contracts;

namespace PizzazzBitesBackend.Services.Authentication;

public interface IAuthService
{
    Task<AuthResult> RegisterAsync(string email, string firstName, string lastName, string password, string role);
    Task<AuthResult> LoginAsync(string email, string password);
}