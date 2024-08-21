using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;
public class Pizza : Product
{
        public int ProductId { get; set; }
        public bool IsSpicy { get; set; }
        public bool IsVegetarian { get; set; }
        public PizzaType PizzaType { get; set; }
}
