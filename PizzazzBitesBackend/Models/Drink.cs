using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;

public class Drink : Product
{
    public int ProductId { get; set; }
    public bool IsCarbonated { get; set; }
    public bool IsAlcoholic { get; set; }
    public decimal AlcoholPercentage { get; set; }
    public bool IsSugarFree { get; set; }
    public string Volume { get; set; }
    public DrinkType DrinkType { get; set; }
}