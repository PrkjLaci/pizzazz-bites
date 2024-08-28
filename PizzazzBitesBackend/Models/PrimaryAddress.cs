using System.Text.Json.Serialization;

namespace PizzazzBitesBackend.Models;

public class PrimaryAddress
{
    public int? PrimaryAddressId { get; set; }
    public string HouseNumber { get; set; }
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
    public string Country { get; set; }
    
    public string UserId { get; set; }
    [JsonIgnore]
    public User User { get; set; }
}