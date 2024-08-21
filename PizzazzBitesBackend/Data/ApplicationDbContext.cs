using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Data;

public class ApplicationDbContext : IdentityDbContext<User, IdentityRole, string>
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Pizza> Pizzas { get; set; }
    public DbSet<Dessert> Desserts { get; set; }
    public DbSet<Drink> Drinks { get; set; }
    public DbSet<Salad> Salads { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().ToTable("Products");
        
        modelBuilder.Entity<Pizza>()
            .ToTable("Pizzas")
            .Property(p => p.ProductId)
            .ValueGeneratedOnAdd();
        
        modelBuilder.Entity<Dessert>()
            .ToTable("Desserts")
            .Property(d => d.ProductId)
            .ValueGeneratedOnAdd();

        modelBuilder.Entity<Drink>()
            .ToTable("Drinks")
            .Property(d => d.ProductId)
            .ValueGeneratedOnAdd();

        modelBuilder.Entity<Salad>()
            .ToTable("Salads")
            .Property(s => s.ProductId)
            .ValueGeneratedOnAdd();
    }
}
