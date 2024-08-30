﻿using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Repository.Address;

public class AddressRepository : IAddressRepository
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<AddressRepository> _logger;
    
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

    public async Task RefreshAddressOrder(string email, List<Models.Address> addresses)
    {
        var user = await _context.Users.Include(u => u.Addresses).FirstOrDefaultAsync(u => u.Email == email);
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
            await _context.SaveChangesAsync();
        }
    }

    public async Task SelectPrimaryAddress(string email, int addressId)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        if (user != null)
        {
            var address = await _context.Addresses.FirstOrDefaultAsync(a => a.Id == addressId);
            if (address != null)
            {
                user.PrimaryAddress = new PrimaryAddress
                {
                    HouseNumber = address.HouseNumber,
                    Street = address.Street,
                    City = address.City,
                    State = address.State,
                    ZipCode = address.ZipCode,
                    Country = address.Country
                };
                _context.Users.Update(user);
            }
            await _context.SaveChangesAsync();
        }
    }
}