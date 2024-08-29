using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PizzazzBitesBackend.Models;

public class Address
{
    [Key]
    public int Id { get; set; }
    public string HouseNumber { get; set; }
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
    public string Country { get; set; }
    public string UserId { get; set; }
    public int Order { get; set; }
    [JsonIgnore]
    public User? User { get; set; }
}