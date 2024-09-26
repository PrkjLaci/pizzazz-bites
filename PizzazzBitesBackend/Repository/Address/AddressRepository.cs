using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Repository.Address;

public class AddressRepository : IAddressRepository
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<AddressRepository> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private string UserId => _httpContextAccessor.HttpContext.User.FindAll(ClaimTypes.NameIdentifier).Last().Value;
    
    public AddressRepository(ApplicationDbContext context, ILogger<AddressRepository> logger)
    {
        _context = context;
        _logger = logger;
    }

    public async Task AddAddressToUser(string email, Models.Address address)
    {
        var user = await _context.Users.Include(user => user.Addresses).FirstOrDefaultAsync(u => u.Email == email);
        if (user != null)
        {
            address.UserId = user.Id;
            address.Order = user.Addresses.Count + 1;
            _context.Addresses.Add(address);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<ICollection<Models.Address>?> GetAllAddresses(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        if (user != null)
        {
            var addresses = await _context.Addresses.Where(a => a.UserId == user.Id).OrderBy(a => a.Order).ToListAsync();
            return addresses;
        }
        return null;
    }

    public async Task<PrimaryAddress?> GetPrimaryAddress()
    {
        try
        {
            var primaryAddress = await _context.PrimaryAddresses.FirstOrDefaultAsync(pa => pa.UserId == UserId);
            return primaryAddress;
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
            throw new Exception("An error occurred while getting the primary address. Please try again.");
        }
    }

    public async Task RefreshAddressOrder(string email, List<Models.Address> addresses)
    {
        var user = await _context.Users.Include(u => u.Addresses).Include(user => user.PrimaryAddress).FirstOrDefaultAsync(u => u.Email == email);
        if (user != null)
        {
            foreach (var address in addresses)
            {
                var existingAddress = user.Addresses.FirstOrDefault(a => a.Id == address.Id);
                if (existingAddress != null)
                {
                    existingAddress.Order = address.Order;
                }
            }

            if (user.Addresses != null)
            {
                var firstAddress = user.Addresses.FirstOrDefault(a => a.Order == 0);
                if(user.PrimaryAddress != null)
                {
                    user.PrimaryAddress.HouseNumber = firstAddress.HouseNumber;
                    user.PrimaryAddress.Street = firstAddress.Street;
                    user.PrimaryAddress.City = firstAddress.City;
                    user.PrimaryAddress.State = firstAddress.State;
                    user.PrimaryAddress.ZipCode = firstAddress.ZipCode;
                    user.PrimaryAddress.Country = firstAddress.Country;
                }
                
                user.PrimaryAddress = new PrimaryAddress
                {
                    HouseNumber = firstAddress.HouseNumber,
                    Street = firstAddress.Street,
                    City = firstAddress.City,
                    State = firstAddress.State,
                    ZipCode = firstAddress.ZipCode,
                    Country = firstAddress.Country
                };
                await _context.SaveChangesAsync();
            }

            await _context.SaveChangesAsync();
        }
    }
}
