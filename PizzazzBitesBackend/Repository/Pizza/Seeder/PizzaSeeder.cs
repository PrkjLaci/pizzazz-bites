using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Pizza.Seeder;

public class PizzaSeeder : IPizzaSeeder
{
    private readonly ApplicationDbContext _context;
    
    public PizzaSeeder(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task SeedPizza()
    {
        Console.WriteLine("Seeding pizzas...");

        if (!_context.Pizzas.Any())
        {
            var pizzas = new[]
            {
                new Models.Pizza
                {
                    Name = "Margherita", 
                    Ingredients = "tomato sauce, mozzarella, fresh basil",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/1..jpg",
                    Price = 2790m,
                    IsSpicy = false,
                    IsVegetarian = true,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Prosciutto",
                    Ingredients = "tomato sauce, mozzarella, ham",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/2..jpg",
                    Price = 2890m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Prosciutto e funghi",
                    Ingredients = "tomato sauce, mozzarella, ham, mushrooms",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/03.-Prosciutto-e-funghi.jpg",
                    Price = 2990m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Salame piccante",
                    Ingredients = "tomato sauce, mozzarella, salami piccante",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/4.jpg",
                    Price = 2990m,
                    IsSpicy = true,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Tonno",
                    Ingredients = "tomato sauce, mozzarella, tuna, black olives",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/5.jpg",
                    Price = 3090m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Tonno e cipolla",
                    Ingredients = "tomato sauce, mozzarella, tuna, onion",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/6.jpg",
                    Price = 3090m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Quattro Formaggi",
                    Ingredients = "tomato sauce, mozzarella, parmesan, ricotta, gorgonzola",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2016/10/7jpg.jpg",
                    Price = 3090m,
                    IsSpicy = false,
                    IsVegetarian = true,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Prosciutto e Mais",
                    Ingredients = "tomato sauce, mozzarella, ham, sweetcorn",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/8.jpg",
                    Price = 2990m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Hawaii",
                    Ingredients = "tomato sauce, mozzarella, ham, pineapple",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/9.jpg",
                    Price = 2990m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Mexico",
                    Ingredients = "tomato sauce, mozzarella, ham, mushrooms, sweetcorn",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/10.-Mexico-Pizza.jpg",
                    Price = 3090m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Hungarian",
                    Ingredients = "tomato sauce, mozzarella, hot pepper, salami piccante, onion, bacon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/11.jpg",
                    Price = 3290m,
                    IsSpicy = true,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Piedone",
                    Ingredients = "tomato sauce, mozzarella, ham, red beans, corn, bacon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/12.jpg",
                    Price = 3290m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Tiruana",
                    Ingredients = "tomato sauce, mozzarella, ham, mushrooms, corn, hot pepper, pepperoni",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/tiruana-13.jpg",
                    Price = 3290m,
                    IsSpicy = true,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Texas",
                    Ingredients = "tomato sauce, mozzarella, boiled egg, bacon, salami piccante, hot pepper",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/14.jpg",
                    Price = 3290m,
                    IsSpicy = true,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Pizza alla Gyros",
                    Ingredients = "garlic sour cream sauce, mozzarella, grilled chicken breast, tomato, snake cucumber, iceberg lettuce, red onion",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/15.jpg",
                    Price = 3290m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Valiant from Diósgyőr",
                    Ingredients = "garlic sour cream sauce, mozzarella, red onion, sausage, bacon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/16.jpg",
                    Price = 3290m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Diósgyőr gourmet",
                    Ingredients = "garlic sour cream sauce, mozzarella, sausage, zucchini, dried tomatoes, fresh basil",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/17.jpg",
                    Price = 3390m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.ItalianAndInternational,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Zucchine",
                    Ingredients = "garlic sour cream sauce, mozzarella, zucchini, dried tomatoes, fresh basil",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/18-600x280.jpg",
                    Price = 3490m,
                    IsSpicy = false,
                    IsVegetarian = true,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Prosciutto e porcini",
                    Ingredients = "tomato sauce, mozzarella, ham, mushrooms",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/19.jpg",
                    Price = 3390m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Rucola e grana",
                    Ingredients = "tomato sauce, mozzarella, Parma ham, rocket, grana padano",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/20.jpg",
                    Price = 3390m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Filippo",
                    Ingredients = "tomato sauce, mozzarella, gorgonzola, salami piccante",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/21.jpg",
                    Price = 3290m,
                    IsSpicy = true,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Sienna",
                    Ingredients = "tomato sauce, mozzarella, Parma ham, boletus mushrooms, ricotta",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/22.jpg",
                    Price = 3490m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Nuovo impero",
                    Ingredients = "tomato sauce, mozzarella, salami piccante, grilled zucchini and eggplant, ricotta, fresh basil",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/23.jpg",
                    Price = 3590m,
                    IsSpicy = true,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Quattro staggioni",
                    Ingredients = "tomato sauce, mozzarella, ham, mushrooms, artichokes, olives",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/24.jpg",
                    Price = 3590m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name ="Porcini mozzarella di bufala",
                    Ingredients = "tomato sauce, buffalo mozzarella, porcini mushrooms, fresh basil",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/25.jpg",
                    Price = 3590m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Napoletana",
                    Ingredients = "tomato sauce, buffalo mozzarella, anchovies, capers, fresh basil, lemon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/26.jpg",
                    Price = 3790m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Frutti di mare",
                    Ingredients = "tomato sauce, mozzarella, octopus, crab, squid, mussels, black olives, lemon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/27.jpg",
                    Price = 3790m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Salmone",
                    Ingredients = "tomato sauce, mozzarella, smoked salmon, rucola, lemon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/28.jpg",
                    Price = 3990m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Mistico",
                    Ingredients = "tomato sauce, mozzarella, goat and sheep cheese, dried tomatoes, boletus mushrooms",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/29.jpg",
                    Price = 4090m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.PizzaAlCarbone,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Virginia",
                    Ingredients = "tomato sauce, mozzarella, Parma ham, fresh cherry tomatoes, ricotta, arugula",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/30.jpg",
                    Price = 4090m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.PizzaAlCarbone,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Aida",
                    Ingredients = "tomato sauce, mozzarella, fresh cherry tomatoes, goat cheese, bird salad, freshly grated ginger, lemon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/31.jpg",
                    Price = 4090m,
                    IsSpicy = false,
                    IsVegetarian = true,
                    IsNew = false,
                    PizzaType = PizzaType.PizzaAlCarbone,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Lunetta",
                    Ingredients = "tomato sauce, mozzarella, smoked salmon, ricotta, arugula, fresh basil, lemon",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/32.jpg",
                    Price = 4290m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.PizzaAlCarbone,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Pizza con patate",
                    Ingredients = "garlic sour cream sauce, mozzarella, sweet potato slices, bacon, pepper, fresh parsley",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/33.jpg",
                    Price = 3290m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Vulcano",
                    Ingredients = "tomato sauce, mozzarella, fresh chili, salami piccante, mushroom, hot pepper",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/34.jpg",
                    Price = 3290m,
                    IsSpicy = true,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Virginia bianca",
                    Ingredients = "tomato sauce, mozzarella, Parma ham, fresh cherry tomatoes, ricotta, arugula",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/Virginia-bianca.jpg",
                    Price = 3590m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Bresaola",
                    Ingredients = "tomato sauce, mozzarella, bresaola ham, arugula, parmesan flakes",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/36.jpg",
                    Price = 3790m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = false,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Crema e Gusto",
                    Ingredients = "smoked cheese sauce, mozzarella, grilled chicken breast, mushrooms, fresh parsley",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/37.jpg",
                    Price = 3390m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = true,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Tartufo e porcini",
                    Ingredients = "mascarpone truffle cream, mozzarella, porcini mushrooms",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/38.jpg",
                    Price = 3790m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = true,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Carbone rucola e grana",
                    Ingredients = "tomato sauce, mozzarella, Parma ham, rocket, grana padano",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2018/11/39.jpg",
                    Price = 4090m,
                    IsSpicy = false,
                    IsVegetarian = false,
                    IsNew = true,
                    PizzaType = PizzaType.PizzaAlCarbone,
                    Rating = 0,
                    RatingCount = 0
                },
                
                new Models.Pizza
                {
                    Name = "Pizza di Timo",
                    Ingredients = "garlic sour cream sauce, mozzarella, sweet potatoes, zucchini, artichokes, dried tomatoes, ricotta, thyme",
                    ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2019/09/20190913_144213.jpg",
                    Price = 3690m,
                    IsSpicy = false,
                    IsVegetarian = true,
                    IsNew = true,
                    PizzaType = PizzaType.Artisan,
                    Rating = 0,
                    RatingCount = 0
                }
            };
            
            _context.Pizzas.AddRange(pizzas);
            await _context.SaveChangesAsync();
        }
    }
}