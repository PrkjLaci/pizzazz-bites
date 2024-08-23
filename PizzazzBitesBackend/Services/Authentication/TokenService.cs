using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Services.Authentication;

public class TokenService : ITokenService
{
    private const int ExpirationInMinutes = 30;
    
    public string CreateToken(User user)
    {
        var expiration = DateTime.UtcNow.AddMinutes(ExpirationInMinutes);
        var token = CreateJwtToken(CreateClaims(user),
            CreateSigningCredentials(),
            expiration);
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    private JwtSecurityToken CreateJwtToken(List<Claim> claims, SigningCredentials credentials, DateTime expiration) =>
        new("apiWithAuthBackend", "apiWithAuthBackend", claims, expires: expiration, signingCredentials: credentials);
    
    private List<Claim> CreateClaims(User user)
    {
        try
        {
            var claims = new List<Claim>
            {
                new(JwtRegisteredClaimNames.Sub, "TokenForTheApiWithAuth"),
                new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new(JwtRegisteredClaimNames.Iat,
                    EpochTime.GetIntDate(DateTime.UtcNow).ToString(CultureInfo.InvariantCulture),
                    ClaimValueTypes.Integer64),
                new(ClaimTypes.NameIdentifier, user.Id),
                new(ClaimTypes.Name, user.LastName + " " + user.FirstName),
                new(ClaimTypes.Email, user.Email)
            };
            return claims;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw new Exception("Error creating claims.");
        }
        
    }
    
    private SigningCredentials CreateSigningCredentials()
    {
        return new SigningCredentials(
            new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("!SomethingSecret!!SomethingSecret!")
            ),
            SecurityAlgorithms.HmacSha256
        );
    }
    
}