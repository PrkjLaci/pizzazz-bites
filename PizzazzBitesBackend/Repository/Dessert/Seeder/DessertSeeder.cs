using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Dessert.Seeder;

public class DessertSeeder : IDessertSeeder
{
    private readonly ApplicationDbContext _context;
    
    public DessertSeeder(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task SeedDesserts()
    {
        Console.WriteLine("Seeding desserts...");
        if (!_context.Desserts.Any())
        {
            var desserts = new[]
            {
                new Models.Dessert
            {
                Name = "Vanilla Bean Panna Cotta",
                Description = "Panna cotta — literally 'cooked cream' in Italian — is a silky, eggless custard thickened with a touch of gelatin. This easy panna cotta recipe is an especially rich version made with all cream instead of a mix of cream and milk.",
                ImageUrl = "https://www.foodandwine.com/thmb/jnvnKMJKAICTTJOjKEDM0YQppUg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-vanilla-bean-panna-cotta-hero-01-4f87b52868fa4b24b2889cd5a4783df0.jpg",
                Price = 1490m,
                IsLactoseFree = false,
                IsGlutenFree = true,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Tiramisu",
                Description = "Tangy mascarpone is layered with coffee-soaked ladyfingers for an alcohol-free version of the popular creamy Italian dessert.",
                ImageUrl = "https://www.foodandwine.com/thmb/qW0dAzR0iyfGj-lRPwMDSEZ2CDE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Classic-Tiramisu-FT-RECIPE0723-d5801043867b498a832c6f03c6fa82a8.jpg",
                Price = 1590m,
                IsLactoseFree = false,
                IsGlutenFree = false,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Pistachio Stracciatella Gelato",
                Description = "Gelato is denser than ice cream, thanks in part to the larger amount of milk versus cream and the slower rate at which it's typically churned. The slower churning pace incorporates less air, yielding a texture that's less fluffy, and the lower percentage of fat makes the flavors taste more intense. Ice cream maker Fany Gerson uses two classic Italian ingredients: stracciatella and pistachio.",
                ImageUrl = "https://www.foodandwine.com/thmb/o6fhycs2MIO2A1oI_uLI3YT8Wcg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pistachio-Straciatella-Gelato-FT-RECIPE0622-5204ea78cab749b1a7e81eb8216d661d.jpg",
                Price = 1790m,
                IsLactoseFree = false,
                IsGlutenFree = true,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Affogato",
                Description = "Affogato means 'to drown' in Italian and refers to the melding of espresso and ice cream, two after-dinner classics. Bitter, sweet, hot, cold, black, and white, it's a celebration of contrast.",
                ImageUrl = "https://www.foodandwine.com/thmb/sFRdDtthS5AkSTJXzcWcyLobScM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Affogato-FT-RECIPE1023-6b5da077aea946f2b489cee1246e5834.jpg",
                Price = 1390m,
                IsLactoseFree = false,
                IsGlutenFree = true,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Italian Almond Tart",
                Description = "This rustic dessert is from the Lombardy region of Northern Italy, where it's called sbrisolona. It's crumbly, buttery, and nutty; chef Suzanne Goin thinks of it as a cross between biscotti and shortbread. She recommends dipping chunks of it into the Champagne-spiked sabayon, an airy dessert sauce made with whipped egg yolks.",
                ImageUrl = "https://www.foodandwine.com/thmb/xrziiYIjdNMHssUY4vD4NwsRf3s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Italian-Almond-Tart-FT-RECIPE0923-bafdc26a20814cedb567c06fc576fe87.jpg",
                Price = 1690m,
                IsLactoseFree = false,
                IsGlutenFree = false,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Zabaglione with Strawberries",
                Description = "We love this zabaglione (a sweet custard spiked with marsala wine) served warm right off the stovetop, but it's also a great make-ahead dessert: Just add a bit of whipped cream and chill.",
                ImageUrl = "https://www.foodandwine.com/thmb/TczKeTVAONyl8WaBUrmP3hnPAek=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2012-r-xl-zabaglione-with-strawberries_0-f4876bda34c14df2a4738ffcb1257c66.jpg",
                Price = 1390m,
                IsLactoseFree = false,
                IsGlutenFree = true,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Plum Cake with Hazelnut Brittle and Honey Mascarpone",
                Description = "Peter Hoffman likes using purple plums, a.k.a. Italian prune plums, for this lightly spiced cake because they bake so well; the flavors intensify, but the plums don't become mushy. The garnishes are light and luscious, namely the soft Italian cheese mascarpone.",
                ImageUrl = "https://www.foodandwine.com/thmb/WEiBRHkMfso5o1qeFhSXwUjDZeQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200809-r-xl-plum-cake-with-hazelnut-brittle-and-honey-mascarpone-2000-65ba5229b7ac4ea9a28aedde5bf877f4.jpg",
                Price = 1690m,
                IsLactoseFree = false,
                IsGlutenFree = false,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Raspberry Jam Bomboloni",
                Description = "Whenever chef Kate Neumann serves bomboloni (Italian doughnut holes), they disappear immediately. They are easy to prepare in advance and then fry at the last moment, and they are also quite easy to dress up. Neumann fills the doughnut holes with fruit jams or chocolate ganache, then rolls them in sugar and spices like anise and cardamom as soon as they come out of the frying pan.",
                ImageUrl = "https://www.foodandwine.com/thmb/Gd97C6HHdXP_B3QtKhjbB1Yjlr4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-fw200611_desserts7-eb6eb5fe5e7043fca89820289778453b.jpg",
                Price = 1790m,
                IsLactoseFree = false,
                IsGlutenFree = false,
                IsNew = false,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Almond Semifreddo with Caramelized Apples",
                Description = "The Craft of Baking co-author Kare DeMasco is known for classically elegant yet approachable recipes, like this super creamy almond semifreddo topped with warm caramelized apples.",
                ImageUrl = "https://www.foodandwine.com/thmb/zUwMmzzES8C_VETgJdqGDNjnLj4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/almond-semifreddo-with-caramelized-apples-fa969f871c8c4dcda6f2eb7bfcbacb5d.jpg",
                Price = 1790m,
                IsLactoseFree = false,
                IsGlutenFree = true,
                IsNew = true,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },

            new Models.Dessert
            {
                Name = "Chocolate Panna Cotta with Spiced Pepita Brittle",
                Description = "This light, silky panna cotta tastes a lot like hot cocoa in custard form. The brittle is easy to make; heat sugar and water on the stove, swirl in butter and spiced pepitas (shelled pumpkin seeds), then let cool.",
                ImageUrl = "https://www.foodandwine.com/thmb/qRltxmFrA-eCeOEA08WRJFM89GI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201103-HD-choc-panna-cotta-201103-r-choc-panna-cotta-88c16a3bc8e84a34be41a40202b1af0f.jpg",
                Price = 1590m,
                IsLactoseFree = false,
                IsGlutenFree = true,
                IsNew = true,
                DessertType = DessertType.Italian,
                Rating = 0,
                RatingCount = 0
            },
            
            new Models.Dessert
            {
                Name = "Classic New York Cheesecake Strawberry",
                Description = "This classic New York cheesecake is a rich, dense, and creamy cake that is sure to satisfy your sweet tooth. The strawberry topping adds a fresh and fruity flavor to the cake.",
                ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2023/03/Felicita-Pizzeria-Classic-New-York-Cheesecake-epres-scaled.jpg",
                Price = 1990m,
                IsLactoseFree = false,
                IsGlutenFree = false,
                IsNew = false,
                DessertType = DessertType.International,
                Rating = 0,
                RatingCount = 0
            },
            
            new Models.Dessert
            {
                Name = "Classic New York Cheesecake Pistachio",
                Description = "This classic New York cheesecake is a rich, dense, and creamy cake that is sure to satisfy your sweet tooth. The pistachio topping adds a nutty flavor to the cake.",
                ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2023/03/Felicita-Pizzeria-Classic-New-York-Cheesecake-pisztacia-scaled.jpg",
                Price = 1990m,
                IsLactoseFree = false,
                IsGlutenFree = false,
                IsNew = false,
                DessertType = DessertType.International,
                Rating = 0,
                RatingCount = 0
            },
            
            new Models.Dessert
            {
                Name = "Oreo Cheesecake",
                Description = "This Oreo cheesecake is a rich, dense, and creamy cake that is sure to satisfy your sweet tooth. The Oreo topping adds a chocolatey flavor to the cake.",
                ImageUrl = "https://felicitapizzeria.hu/wp-content/uploads/2022/07/Oreo-szelet-Felicita-Pizzeria.jpeg",
                Price = 1890m,
                IsLactoseFree = false,
                IsGlutenFree = false,
                IsNew = true,
                DessertType = DessertType.International,
                Rating = 0,
                RatingCount = 0
            }
            
            };

            await _context.Desserts.AddRangeAsync(desserts);
            await _context.SaveChangesAsync();
        }
    }
}