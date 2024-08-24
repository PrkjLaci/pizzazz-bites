using Microsoft.AspNetCore.Identity;

namespace PizzazzBitesBackend.Models;

public class User : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Address PrimaryAddress { get; set; }
    public List<Address> Addresses { get; set; }
}