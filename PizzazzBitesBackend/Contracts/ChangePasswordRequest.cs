namespace PizzazzBitesBackend.Contracts;

public record ChangePasswordRequest(string email, string password1, string password2, string newPassword);