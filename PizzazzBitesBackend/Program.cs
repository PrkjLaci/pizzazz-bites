using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Repository.Pizza;
using PizzazzBitesBackend.Repository.Pizza.Seeder;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

AddServices();

var app = builder.Build();

using var scope = app.Services.CreateScope();

var pizzaSeeder = scope.ServiceProvider.GetRequiredService<IPizzaSeeder>();
await pizzaSeeder.SeedPizza();

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

app.MapControllers();

app.Run();

void AddServices()
{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
     
    
    builder.Services.AddScoped<IPizzaSeeder, PizzaSeeder>();
    builder.Services.AddScoped<IPizzaRepository, PizzaRepository>();
}

    

