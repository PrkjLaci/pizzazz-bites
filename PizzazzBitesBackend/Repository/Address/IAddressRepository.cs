﻿namespace PizzazzBitesBackend.Repository.Address;

public interface IAddressRepository
{
    public Task AddAddressToUser(string email, Models.Address address);
    public Task<ICollection<Models.Address>?> GetAllAddresses(string email);
    public Task RefreshAddressOrder(string email, List<Models.Address> addresses);
    public Task SelectPrimaryAddress(string email, int addressId);
}