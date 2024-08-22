using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Repository.CheesePlate.Seeder;
using PizzazzBitesBackend.Repository.Dessert.Seeder;
using PizzazzBitesBackend.Repository.Drink.Seeder;
using PizzazzBitesBackend.Repository.Pizza.Seeder;
using PizzazzBitesBackend.Repository.ProductRepository;
using PizzazzBitesBackend.Repository.Salad.Seeder;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ClockSkew = TimeSpan.Zero,
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidIssuer = "apiWithAuthBackend",
        ValidAudience = "apiWithAuthBackend",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("!SomethingSecret!!SomethingSecret!"))
    };
});

AddServices();

var app = builder.Build();

using var scope = app.Services.CreateScope();

var pizzaSeeder = scope.ServiceProvider.GetRequiredService<IPizzaSeeder>();
await pizzaSeeder.SeedPizza();

var dessertSeeder = scope.ServiceProvider.GetRequiredService<IDessertSeeder>();
await dessertSeeder.SeedDesserts();

var drinkSeeder = scope.ServiceProvider.GetRequiredService<IDrinkSeeder>();
await drinkSeeder.SeedDrink();

var saladSeeder = scope.ServiceProvider.GetRequiredService<ISaladSeeder>();
await saladSeeder.SeedSalad();

var charcuterieBoardSeeder = scope.ServiceProvider.GetRequiredService<ICharcuterieBoardSeeder>();
await charcuterieBoardSeeder.SeedCharcuterieBoards();

var connection = "http://localhost:5089/";
app.UseCors(b =>
{
    b.WithOrigins(connection!)
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials()
        .WithExposedHeaders("content-type")
        .SetIsOriginAllowed(_ => true);
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("Development");

app.UseAuthorization();
app.UseAuthentication();

app.MapControllers();

app.Run();

void AddServices()
{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    
    builder.Services.AddScoped<IPizzaSeeder, PizzaSeeder>();
    builder.Services.AddScoped<IDessertSeeder, DessertSeeder>();
    builder.Services.AddScoped<IDrinkSeeder, DrinkSeeder>();
    builder.Services.AddScoped<ISaladSeeder, SaladSeeder>();
    builder.Services.AddScoped<ICharcuterieBoardSeeder, CharcuterieBoardSeeder>();
    
    builder.Services.AddScoped<IProductRepository, ProductRepository>();
}
