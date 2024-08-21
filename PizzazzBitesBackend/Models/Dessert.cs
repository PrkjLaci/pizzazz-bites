using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;

public class Dessert : Product
{
    public int ProductId { get; set; }
    public bool IsLactoseFree { get; set; }
    public bool IsGlutenFree { get; set; }
    public DessertType DessertType { get; set; }
}