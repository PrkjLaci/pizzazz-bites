namespace PizzazzBitesBackend.Contracts;

public record ChangePasswordRequest(string email, string oldPassword, string newPassword1, string newPassword2);