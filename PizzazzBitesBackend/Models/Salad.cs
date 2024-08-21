using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;

public class Salad : Product
{
    public int ProductId { get; set; }
    public bool IsVegan { get; set; }
    public bool IsVegetarian { get; set; }
    public bool IsGlutenFree { get; set; }
    public bool IsContainsNuts { get; set; }
    public SaladType SaladType { get; set; }
}