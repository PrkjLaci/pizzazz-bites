using PizzazzBitesBackend.Contracts;

namespace PizzazzBitesBackend.Services.Authentication;

public interface IAuthService
{
    Task<AuthResult> RegisterAsync(RegistrationRequest registrationRequest);
}