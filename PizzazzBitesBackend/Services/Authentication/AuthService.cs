﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Contracts;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Services.Authentication;

public class AuthService : IAuthService
{
    private readonly UserManager<User> _userManager;
    private readonly ITokenService _tokenService;
    
    public AuthService(UserManager<User> userManager, ITokenService tokenService)
    {
        _userManager = userManager;
        _tokenService = tokenService;
    }
    
    public async Task<AuthResult> RegisterAsync(string email, string firstName, string lastName, string password)
    {
        var user = await _userManager.CreateAsync(new User
        {
            UserName = email,
            FirstName = firstName,
            LastName = lastName,
            Email = email,
        }, password);

        if (!user.Succeeded)
        {
            return FailedRegistration(user, email, firstName, lastName);
        }

        return new AuthResult(true, email, firstName, lastName, "");
    }

    public async Task<AuthResult> LoginAsync(string email, string password)
    {
        var managedUser = await _userManager.FindByEmailAsync(email);
        if (managedUser == null)
        {
            return InvalidEmail(email);
        }
        
        var isPasswordValid = await _userManager.CheckPasswordAsync(managedUser, password);
        if (!isPasswordValid)
        {
            return InvalidPassword(email, managedUser.UserName);
        }
        
        var accessToken = _tokenService.CreateToken(managedUser);
        
        return new AuthResult(true, managedUser.Email, managedUser.FirstName, managedUser.LastName, accessToken);
    }

    private static AuthResult FailedRegistration(IdentityResult result, string email, string firstName, string lastName)
    {
        var authResult = new AuthResult(false, email, firstName, lastName, "");

        foreach (var error in result.Errors)
        {
            authResult.ErrorMessages.Add(error.Code, error.Description);
        }

        return authResult;
    }
    
    private AuthResult InvalidEmail(string email)
    {
        var userByUserName = _userManager.Users.FirstOrDefaultAsync(u => u.Email == email).Result;
        var result = new AuthResult(false, email, userByUserName.FirstName, userByUserName.LastName, "");
        result.ErrorMessages.Add("Bad credentials", "Invalid email");
        return result;
    }

    private AuthResult InvalidPassword(string email, string userName)
    {
        var userByUserName = _userManager.Users.FirstOrDefaultAsync(u => u.Email == email).Result;
        var result = new AuthResult(false, email, userByUserName.FirstName, userByUserName.LastName, "");
        result.ErrorMessages.Add("Bad credentials", "Invalid password");
        return result;
    }
}