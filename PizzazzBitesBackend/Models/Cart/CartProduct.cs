using System.Text.Json.Serialization;

namespace PizzazzBitesBackend.Models.Cart;

public class CartProduct
{
    [JsonIgnore]
    public int CartId { get; set; }
    [JsonIgnore]
    public Cart Cart { get; set; }
    public int ProductId { get; set; }
    public Product? Product { get; set; }
    public int Quantity { get; set; }
}