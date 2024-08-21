using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.CheesePlate.Seeder;

public class CharcuterieBoardSeeder : ICharcuterieBoardSeeder
{
    private readonly ApplicationDbContext _context;
    
    public CharcuterieBoardSeeder(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task SeedCharcuterieBoards()
    {
        if (!_context.CharcuterieBoards.Any())
        {
            var charcuterieBoards = new[]
            {
                new CharcuterieBoard
                {
                    Name = "Italian Charcuterie Board",
                    Description =
                        "A beautiful Italian Charcuterie board filled with Italian meats and cheeses and paired with sauces, fruits, and vegetables. Perfect to pair with your Italian meal.",
                    Ingredients =
                        "Burrata, Parmigiano-Reggiano, Camambert, White Chedar, Manchego cheese, Cured meats, Olives, Fresh bread, Caprese Salad, Fruits, Nuts",
                    ImageUrl = "https://www.modernhoney.com/wp-content/uploads/2021/11/Italian-Charcuterie-Board-2-scaled.jpg",
                    Price = 3890m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    ServingSize = "2-4 people",
                    CharcuterieBoardType = CharcuterieBoardType.Italian
                },
                new CharcuterieBoard
                {
                    Name = "Mediterranean Mezze Board",
                    Description = "Mezze is basically a Mediterranean charcuterie board and they’re hands-down one of my favorite ways to eat. Who doesn’t like a little bit of everything?",
                    Ingredients = "Radishes, quartered, Lemon, sliced Cherry tomatoes, halved Cucumber, cut into spears Artichoke hearts Figs, halved Chickpeas, Pita bread, Garlic hummus, Tzatziki, Dolmas (stuffed grape leaves), Green olives, Goat cheese-stuffed peppadews, Tabbouleh, Feta",
                    ImageUrl = "https://ainttooproudtomeg.com/wp-content/uploads/2021/09/Mediterranean-board-1024x1024.jpg",
                    Price = 3790m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    ServingSize = "2-4 people",
                    CharcuterieBoardType = CharcuterieBoardType.Mediterranean
                }
            };

            await _context.CharcuterieBoards.AddRangeAsync(charcuterieBoards);
            await _context.SaveChangesAsync();
        }
    }
}