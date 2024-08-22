namespace PizzazzBitesBackend.Contracts;

public record RegistrationResponse(
    string FirstName,
    string LastName,
    string Email
    );