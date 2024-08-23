using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Services.Authentication;

public interface ITokenService
{
    public string CreateToken(User user);
}