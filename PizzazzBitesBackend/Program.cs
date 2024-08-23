using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Repository.CheesePlate.Seeder;
using PizzazzBitesBackend.Repository.Dessert.Seeder;
using PizzazzBitesBackend.Repository.Drink.Seeder;
using PizzazzBitesBackend.Repository.Pizza.Seeder;
using PizzazzBitesBackend.Repository.ProductRepository;
using PizzazzBitesBackend.Repository.Salad.Seeder;
using PizzazzBitesBackend.Services.Authentication;

var builder = WebApplication.CreateBuilder(args);

AddServices();
ConfigureSwagger();
AddDbContexts();
AddAuthentication();
AddIdentity();

var app = builder.Build();
using var scope = app.Services.CreateScope();

await AddSeeders(scope);
AddCors();

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
    builder.Services.AddScoped<IAuthService, AuthService>();
    builder.Services.AddScoped<ITokenService, TokenService>();
    
    builder.Services.AddScoped<IPizzaSeeder, PizzaSeeder>();
    builder.Services.AddScoped<IDessertSeeder, DessertSeeder>();
    builder.Services.AddScoped<IDrinkSeeder, DrinkSeeder>();
    builder.Services.AddScoped<ISaladSeeder, SaladSeeder>();
    builder.Services.AddScoped<ICharcuterieBoardSeeder, CharcuterieBoardSeeder>();
    
    builder.Services.AddScoped<IProductRepository, ProductRepository>();
}

void ConfigureSwagger()
{
    builder.Services.AddSwaggerGen(option =>
    {
        option.SwaggerDoc("v1", new OpenApiInfo {Title = "PizzazzBitesBackend", Version = "v1"});
        option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            In = ParameterLocation.Header,
            Description = "Please enter a valid token",
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            BearerFormat = "JWT",
            Scheme = "Bearer"
        });
        option.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                }, new string[]{}
            }
        });
    });

}

void AddDbContexts()
{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
}

void AddAuthentication()
{
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
}

void AddIdentity()
{
    builder.Services.AddIdentityCore<User>(options =>
        {
            options.Password.RequireDigit = false;
            options.Password.RequireLowercase = false;
            options.Password.RequireNonAlphanumeric = false;
            options.Password.RequireUppercase = false;
            options.Password.RequiredLength = 6;
        }).AddRoles<IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>();
}

async Task AddSeeders(IServiceScope scope)
{
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
}

void AddCors()
{
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
}
