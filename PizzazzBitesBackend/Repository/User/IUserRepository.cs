using PizzazzBitesBackend.Contracts;

namespace PizzazzBitesBackend.Repository.User;

public interface IUserRepository
{
    Task<UserDataResponse> GetUserByEmail(string email);
    Task UpdateUserPersonalInfo(UserDataResponse userData);
    Task<bool> ChangePassword(ChangePasswordRequest request);
}