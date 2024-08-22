namespace PizzazzBitesBackend.Services.Authentication;

public record AuthResult(
    bool Success,
    string Email,
    string FirstName,
    string LastName,
    string Token)
{
    //Error code - error message
    public readonly Dictionary<string, string> ErrorMessages = new();
}