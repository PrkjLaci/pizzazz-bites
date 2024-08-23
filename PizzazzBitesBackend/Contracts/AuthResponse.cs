namespace PizzazzBitesBackend.Contracts;

public record AuthResponse(string Email, string FirstName, string LastName, string Token);