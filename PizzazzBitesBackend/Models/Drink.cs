using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;

public class Drink : Product
{
    public int ProductId { get; set; }
    public bool IsCarbonated { get; set; }
    public bool IsAlcoholic { get; set; }
    public DrinkType DrinkType { get; set; }
}