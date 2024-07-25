using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;
public class Pizza
{
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Ingredients { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public bool IsSpicy { get; set; }
        public bool IsVegetarian { get; set; }
        public bool IsNew { get; set; }
        public PizzaType PizzaType { get; set; }
        public decimal Rating { get; set; }
        public int RatingCount { get; set; }
}