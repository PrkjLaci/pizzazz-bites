namespace PizzazzBitesBackend.Models;

public class Rating
{
    public string UserId { get; set; }
    public User User { get; set; }
    
    public int ProductId { get; set; }
    public Product Product { get; set; }
    
    public int Value { get; set; }
}