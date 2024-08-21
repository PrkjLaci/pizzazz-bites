using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Repository.Drink.Seeder;

public class DrinkSeeder : IDrinkSeeder
{
    private readonly ApplicationDbContext _context;
    
    public DrinkSeeder(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task SeedDrink()
    {
        Console.WriteLine("Seeding drinks...");
        
        if(!_context.Drinks.Any())
        {
            var drinks = new[]
            {
                new Models.Drink
                {
                    Name = "Coca-Cola",
                    Description = "Coca-Cola is a carbonated soft drink produced by The Coca-Cola Company.",
                    ImageUrl = "https://assets.wakefern.com/is/image/wakefern/4900000463-001?$Mi9Product_detail$",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.SoftDrink
                },
                new Models.Drink
                {
                    Name = "Coca-Cola Zero",
                    Description =
                        "Coca-Cola Zero Sugar is a sugar-free and calorie-free soft drink with the taste of classic Coca-Cola.",
                    ImageUrl = "https://www.aqua-amore.com/wp-content/uploads/2013/03/Coca-Cola-Zero-330ml-Glass.jpg",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    IsSugarFree = true,
                    Volume = "330ml",
                    DrinkType = DrinkType.SoftDrink
                },

                new Models.Drink
                {
                    Name = "Fanta Orange",
                    Description =
                        "Fanta Orange is a fruit-flavored carbonated soft drink produced by The Coca-Cola Company.",
                    ImageUrl =
                        "https://www.drinksupermarket.com/media/catalog/product/cache/8b581ff15af3d0f5c66f4d11bd96034e/3/8/381717001_fanta-orange-330ml_temp.jpg",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.SoftDrink
                },

                new Models.Drink
                {
                    Name = "Kinley Ginger",
                    Description = "Kinley Ginger is a carbonated soft drink with a distinctive ginger flavor.",
                    ImageUrl =
                        "https://www.abcfoodservice.it/30766-large_default/kinley-ginger-ale-cl-20-x-24-bottles.jpg",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.SoftDrink
                },

                new Models.Drink
                {
                    Name = "Kinley Tonic Water",
                    Description = "Kinley Tonic Water is a carbonated soft drink with a distinctive bitter flavor.",
                    ImageUrl = "https://www.casillowine.com/11014-large_default/kinley-tonic-water.jpg",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.SoftDrink
                },
                new Models.Drink
                {
                    Name = "Sprite",
                    Description =
                        "Sprite is a lemon-lime flavored carbonated soft drink produced by The Coca-Cola Company.",
                    ImageUrl = "https://m.media-amazon.com/images/I/61wh+v9s0zL.jpg",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.SoftDrink
                },
                new Models.Drink
                {
                    Name = "NatureAqua",
                    Description = "Mineral Water is water containing minerals or other dissolved substances.",
                    ImageUrl = "https://www.irodavarazs.hu/picroot/term/n_99733.jpg",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = false,
                    IsSugarFree = true,
                    Volume = "330ml",
                    DrinkType = DrinkType.Water
                },
                new Models.Drink
                {
                    Name = "NatureAqua Sparkling",
                    Description = "Sparkling Water is water containing carbon dioxide under pressure.",
                    ImageUrl = "https://italdepo.hu/wp-content/uploads/2020/02/naturaqua_033_dus-600x600.jpg",
                    Price = 650m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    IsSugarFree = true,
                    Volume = "330ml",
                    DrinkType = DrinkType.Water
                },
                new Models.Drink
                {
                    Name = "Peroni Nastro Azzurro",
                    Description = "Peroni Nastro Azzurro is a premium Italian beer.",
                    ImageUrl =
                        "https://lovewine.je/cdn/shop/files/Peroni-Lager-Nastro-Azzurro-NRB-33cl-case-of-24_1400x.webp?v=1717097587",
                    Price = 850m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = true,
                    AlcoholPercentage = 5.1m,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.Beer
                },
                new Models.Drink
                {
                    Name = "Peroni Nastro Azzurro 0.0%",
                    Description = "Peroni Nastro Azzurro 0.0% is a non-alcoholic Italian beer.",
                    ImageUrl =
                        "https://digitalcontent.api.tesco.com/v2/media/ghs/79854259-f258-48e9-828f-fd60f9fd91f1/245d9de7-035c-45d7-8db6-194ae9c54f2b_2012479927.jpeg?h=540&w=540",
                    Price = 850m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = false,
                    AlcoholPercentage = 0m,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.Beer
                },
                new Models.Drink
                {
                    Name = "Peroni Capri",
                    Description = "Peroni Capri is a premium Italian beer.",
                    ImageUrl = "https://cdn1.interspar.at/cachableservlets/articleImage.dam/hu/528731004/dt_zoom.jpg",
                    Price = 850m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = true,
                    IsAlcoholic = true,
                    AlcoholPercentage = 4.2m,
                    IsSugarFree = false,
                    Volume = "330ml",
                    DrinkType = DrinkType.Beer
                },
                new Models.Drink
                {
                    Name = "CONTRADE Primitivo 2023",
                    Description = "CONTRADE Primitivo 2023 is a red wine from Italy.",
                    ImageUrl =
                        "https://www.liveli.it/wp-content/uploads/CONTRADE-primitivo-Bottle750mlWHITE_BKG_SHADOW-_NO-YEAR-1000px-24.jpg",
                    Price = 980m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 13.0m,
                    IsSugarFree = false,
                    Volume = "1 dl",
                    DrinkType = DrinkType.Wine
                },
                new Models.Drink
                {
                    Name = "Fattoria di Magliano Capato 2019",
                    Description = "Fattoria di Magliano Capato 2019 is a white wine from Italy.",
                    ImageUrl =
                        "https://acellars.com.au/cdn/shop/files/PhotoRoom-20230504_195734_1_1361x.jpg?v=1683194860",
                    Price = 880m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 13.5m,
                    IsSugarFree = false,
                    Volume = "1 dl",
                    DrinkType = DrinkType.Wine
                },
                new Models.Drink
                {
                    Name = "Lungarotti Rondo\u00b4Rosato 2023",
                    Description = "Lungarotti Rondo\u00b4Rosato 2023 is a rosé wine from Italy.",
                    ImageUrl =
                        "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/b/r/brezzarosa_1_1_1_1_1_1.jpg",
                    Price = 880m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 12.5m,
                    IsSugarFree = false,
                    Volume = "1 dl",
                    DrinkType = DrinkType.Wine
                },
                new Models.Drink
                {
                    Name = "Jägermeister",
                    Description =
                        "Jägermeister is a German herbal liqueur made with 56 different herbs, fruits, roots, and spices.",
                    ImageUrl =
                        "https://goodspiritshop.cdn.shoprenter.hu/custom/goodspiritshop/image/cache/w900h900wt1q100/product/P5513_1.jpg.webp?lastmod=0.1723796806",
                    Price = 1200m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 35.0m,
                    IsSugarFree = false,
                    Volume = "4 cl",
                    DrinkType = DrinkType.ShortDrink,
                },
                new Models.Drink
                {
                    Name = "Campari",
                    Description =
                        "Campari is an Italian alcoholic liqueur, considered an apéritif, obtained from the infusion of herbs and fruit in alcohol and water.",
                    ImageUrl =
                        "https://idrinks.cdn.shoprenter.hu/custom/idrinks/image/data/product/Keserulikor/idrinks-campari-uj.jpg.webp?lastmod=1720610273.1666343376",
                    Price = 1500m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 25.0m,
                    IsSugarFree = false,
                    Volume = "4 cl",
                    DrinkType = DrinkType.ShortDrink,
                },
                new Models.Drink
                {
                    Name = "Limoncello",
                    Description =
                        "Limoncello is an Italian lemon liqueur mainly produced in Southern Italy, especially in the Gulf of Naples.",
                    ImageUrl = "https://www.olaszbolt.hu/components/com_jshopping/files/img_products/E12025050_LIMONCINO_BOTTEGA_CL50_WB_HR_1000x1247.jpg",
                    Price = 1300m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 30.0m,
                    IsSugarFree = false,
                    Volume = "4 cl",
                    DrinkType = DrinkType.ShortDrink,
                },
                new Models.Drink
                {
                    Name = "Aperol",
                    Description =
                        "Aperol is an Italian apéritif made of gentian, rhubarb, and cinchona, among other ingredients.",
                    ImageUrl = "https://s13emagst.akamaized.net/products/30111/30110765/images/res_c2380983854de5984106835fc6f89b71.jpg",
                    Price = 1400m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 11.0m,
                    IsSugarFree = false,
                    Volume = "4 cl",
                    DrinkType = DrinkType.ShortDrink,
                },
                new Models.Drink
                {
                    Name = "Sambuca",
                    Description =
                        "Sambuca is an Italian anise-flavoured, usually colourless, liqueur. Its most common variety is white Sambuca.",
                    ImageUrl = "https://qualityliquorstore.com/cdn/shop/files/romana-sambuca__99575.jpg?v=1687160988&width=960",
                    Price = 1350m,
                    IsNew = false,
                    Rating = 0,
                    RatingCount = 0,
                    IsCarbonated = false,
                    IsAlcoholic = true,
                    AlcoholPercentage = 38.0m,
                    IsSugarFree = false,
                    Volume = "4 cl",
                    DrinkType = DrinkType.ShortDrink,
                }
            };
            
            await _context.Drinks.AddRangeAsync(drinks);
            await _context.SaveChangesAsync();
        }
    }
}