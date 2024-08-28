using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace PizzazzBitesBackend.Models;

public class User : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    [JsonIgnore]
    public PrimaryAddress? PrimaryAddress { get; set; }
    public ICollection<Address>? Addresses { get; set; }
}