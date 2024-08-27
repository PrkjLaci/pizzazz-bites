using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Contracts;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Repository.User;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly IUserRepository _userRepository;
    
    public UserController(ILogger<UserController> logger, IUserRepository userRepository)
    {
        _logger = logger;
        _userRepository = userRepository;
    }
    
    [Authorize(Roles = "Admin, User")]
    [HttpGet("get-user-by-email")]
    public async Task<ActionResult<UserDataResponse>> GetUserByEmail([FromQuery] string email)
    {
        try
        {
            return await _userRepository.GetUserByEmail(email);
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot get user by email.");
            throw new Exception("Cannot get user by email.");
        }
    }
    
    [Authorize(Roles = "Admin, User")]
    [HttpPatch("update-personal-info")]
    public async Task<ActionResult<UserDataResponse>> UpdateUserPersonalInfo([FromBody] UserDataResponse userData)
    {
        try
        {
            await _userRepository.UpdateUserPersonalInfo(userData);
            return userData;
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot update user personal info.");
            throw new Exception("Cannot update user personal info.");
        }
    }
}