using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Data;

public class ApplicationDbContext : IdentityDbContext<User, IdentityRole, string>
{
    public DbSet<Pizza> Pizzas { get; set; }
    public DbSet<Dessert> Desserts { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Pizza>()
            .HasKey(p => p.Id);

        modelBuilder.Entity<Pizza>()
            .HasIndex(p => p.Name)
            .IsUnique();
        
        modelBuilder.Entity<Dessert>()
            .HasKey(d => d.Id);
        
        modelBuilder.Entity<Dessert>()
            .HasIndex(d => d.Name)
            .IsUnique();
    }
}
