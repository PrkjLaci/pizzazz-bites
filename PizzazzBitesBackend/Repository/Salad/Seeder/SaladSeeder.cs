using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Salad.Seeder;

public class SaladSeeder : ISaladSeeder
{
    private readonly ApplicationDbContext _context;
    
    public SaladSeeder(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task SeedSalad()
    {
        if (!_context.Salads.Any())
        {
            var salads = new[]
            {
                new Models.Salad
                {
                    Name = "Caprese Salad",
                    Description = "A classic Italian salad made with fresh mozzarella, ripe tomatoes, and basil leaves, drizzled with olive oil and balsamic vinegar.",
                    Ingredients = "Mozzarella, Tomatoes, Basil, Olive Oil, Balsamic Vinegar",
                    ImageUrl = "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
                    Price = 1590m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsVegan = false,
                    IsVegetarian = true,
                    IsGlutenFree = true,
                    IsContainsNuts = false,
                    SaladType = SaladType.Italian
                },
                
                new Models.Salad
                {
                    Name = "Panzanella",
                    Description = "A Tuscan salad made with soaked stale bread, tomatoes, onions, and basil, dressed with olive oil and vinegar.",
                    Ingredients = "Bread, Tomatoes, Onions, Basil, Olive Oil, Vinegar",
                    ImageUrl = "https://static01.nyt.com/images/2015/07/08/dining/08APPE2-copy/08APPE2-superJumbo.jpg",
                    Price = 1690m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsVegan = true,
                    IsVegetarian = true,
                    IsGlutenFree = false,
                    IsContainsNuts = false,
                    SaladType = SaladType.Italian
                },
                
                new Models.Salad
                {
                    Name = "Insalata di Mare",
                    Description = "A refreshing seafood salad made with a mix of shrimp, calamari, and mussels, tossed with olive oil, lemon juice, and herbs.",
                    Ingredients = "Shrimp, Calamari, Mussels, Olive Oil, Lemon Juice, Herbs",
                    ImageUrl = "https://www.fattoincasadabenedetta.it/wp-content/uploads/2021/07/INSALATA-DI-MARE-sito4.jpg",
                    Price = 1890m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsVegan = false,
                    IsVegetarian = false,
                    IsGlutenFree = true,
                    IsContainsNuts = false,
                    SaladType = SaladType.Italian
                },
                
                new Models.Salad
                {
                    Name = "Bresaola Salad",
                    Description = "Thinly sliced bresaola served over a bed of arugula, topped with shaved Parmesan, olive oil, and lemon.",
                    Ingredients = "Bresaola, Arugula, Parmesan, Olive Oil, Lemon",
                    ImageUrl = "https://www.cuisine.co.nz/wp-content/uploads/2020/04/Cuisine-Magazine-Hannah-Miller_Recipe_Wagyu-Bresaola-Salad.jpg",
                    Price = 1590m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsVegan = false,
                    IsVegetarian = false,
                    IsGlutenFree = true,
                    IsContainsNuts = false,
                    SaladType = SaladType.Italian
                },
                
                new Models.Salad
                {
                    Name = "Greek Salad",
                    Description = "A traditional Mediterranean salad with fresh cucumbers, tomatoes, onions, olives, and feta cheese, dressed with olive oil and oregano.",
                    Ingredients = "Cucumbers, Tomatoes, Onions, Olives, Feta Cheese, Olive Oil, Oregano",
                    ImageUrl = "https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
                    Price = 1390m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsVegan = false,
                    IsVegetarian = true,
                    IsGlutenFree = true,
                    IsContainsNuts = false,
                    SaladType = SaladType.Mediterranean
                },
                
                new Models.Salad
                {
                    Name = "Tabbouleh",
                    Description = "A refreshing Levantine salad made with bulgur wheat, parsley, mint, tomatoes, and onions, dressed with olive oil and lemon juice.",
                    Ingredients = "Bulgur Wheat, Parsley, Mint, Tomatoes, Onions, Olive Oil, Lemon Juice",
                    ImageUrl = "https://static01.nyt.com/images/2023/05/25/multimedia/MRS-Lebanese-Tabbouleh-wzpk/MRS-Lebanese-Tabbouleh-wzpk-superJumbo.jpg",
                    Price = 1590,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsVegan = true,
                    IsVegetarian = true,
                    IsGlutenFree = false,
                    IsContainsNuts = false,
                    SaladType = SaladType.Mediterranean
                },
                
                new Models.Salad
                {
                    Name = "Fattoush",
                    Description = "A Lebanese salad made with mixed greens, radishes, tomatoes, cucumbers, and fried pita bread, dressed with sumac and olive oil.",
                    Ingredients = "Mixed Greens, Radishes, Tomatoes, Cucumbers, Pita Bread, Sumac, Olive Oil",
                    ImageUrl = "https://assets.bonappetit.com/photos/57af6bea53e63daf11a4e565/1:1/w_2560%2Cc_limit/fattoush.jpg",
                    Price = 1490m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsVegan = true,
                    IsVegetarian = true,
                    IsGlutenFree = false,
                    IsContainsNuts = false,
                    SaladType = SaladType.Mediterranean
                }
            };
            
            await _context.Salads.AddRangeAsync(salads);
            await _context.SaveChangesAsync();
        }
    }
}