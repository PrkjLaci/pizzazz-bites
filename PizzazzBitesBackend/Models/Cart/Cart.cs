using System.Text.Json.Serialization;

namespace PizzazzBitesBackend.Models.Cart;

public class Cart
{
    public int CartId { get; set; }
    public string UserId { get; set; }
    [JsonIgnore]
    public User User { get; set; }
    [JsonIgnore]
    public List<CartProduct> CartProducts { get; set; }
}