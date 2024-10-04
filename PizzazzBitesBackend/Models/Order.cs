using System.Text.Json.Serialization;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;

public class Order
{
    public int Id { get; set; }
    [JsonIgnore]
    public string? UserId { get; set; }
    [JsonIgnore]
    public User? User { get; set; }
    public string Address { get; set; }
    public ICollection<OrderProduct> OrderProducts { get; set; }
    public string PaymentMethod { get; set; }
    public DateTime OrderDate { get; set; } = DateTime.Now;
    public decimal LoyaltyPointsEarned { get; set; }
    public decimal LoyaltyPointsUsed { get; set; }
}