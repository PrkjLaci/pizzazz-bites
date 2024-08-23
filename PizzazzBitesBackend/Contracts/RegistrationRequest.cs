using System.ComponentModel.DataAnnotations;

namespace PizzazzBitesBackend.Contracts;

public record RegistrationRequest(
    [Required] string FirstName,
    [Required] string LastName,
    [Required] string Email,
    [Required] string Password
    );