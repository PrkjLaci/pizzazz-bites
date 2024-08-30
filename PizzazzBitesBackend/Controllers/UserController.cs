using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Contracts;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Repository.Address;
using PizzazzBitesBackend.Repository.User;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;
    private readonly IUserRepository _userRepository;
    private readonly IAddressRepository _addressRepository;
    
    public UserController(ILogger<UserController> logger, IUserRepository userRepository, IAddressRepository addressRepository)
    {
        _logger = logger;
        _userRepository = userRepository;
        _addressRepository = addressRepository;
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

    [Authorize(Roles = "Admin, User")]
    [HttpPost("change-password")]
    public async Task<ActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
    {
        try
        {
            if(request.password1 != request.password2)
                return BadRequest("Passwords do not match.");
            await _userRepository.ChangePassword(request);
            return Ok("Password changed successfully.");
            
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot change password.");
            throw new Exception("Cannot change password.");
        }
        
    }
    
    [Authorize(Roles = "Admin, User")]
    [HttpPost("add-address")]
    public  async Task<ActionResult> AddAddressToUser(string email, [FromBody] Address address)
    {
        try
        {
            await _addressRepository.AddAddressToUser(email, address);
            return Ok("Address added successfully.");
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot add address.");
            throw new Exception("Cannot add address.");
        }
    }
    
    [Authorize(Roles = "Admin, User")]
    [HttpGet("get-all-addresses")]
    public async Task<ActionResult> GetAllAddresses(string email)
    {
        try
        {
            var addresses = await _addressRepository.GetAllAddresses(email);
            return Ok(addresses);
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot get all addresses.");
            throw new Exception("Cannot get all addresses.");
        }
    }
    
    [Authorize(Roles = "Admin, User")]
    [HttpPatch("refresh-address-order")]
    public async Task<ActionResult> RefreshAddressOrder([FromQuery]string email, [FromBody] List<Address> addresses)
    {
        try
        {
            await _addressRepository.RefreshAddressOrder(email, addresses);
            return Ok("Address order refreshed successfully.");
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Cannot refresh address order.");
            throw new Exception("Cannot refresh address order.");
        }
    }
}