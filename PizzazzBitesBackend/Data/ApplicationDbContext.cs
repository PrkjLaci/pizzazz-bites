using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Models.Cart;
using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Data;

public class ApplicationDbContext : IdentityDbContext<User, IdentityRole, string>
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Pizza> Pizzas { get; set; }
    public DbSet<Dessert> Desserts { get; set; }
    public DbSet<Drink> Drinks { get; set; }
    public DbSet<Salad> Salads { get; set; }
    public DbSet<CharcuterieBoard> CharcuterieBoards { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Address> Addresses { get; set; }
    public DbSet<PrimaryAddress> PrimaryAddresses { get; set; }
    public DbSet<Cart> Carts { get; set; }
    public DbSet<CartProduct> CartProducts { get; set; }
    public DbSet<Rating> Ratings { get; set; }

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

        modelBuilder.Entity<CharcuterieBoard>()
            .ToTable("CharcuterieBoards")
            .Property(cb => cb.ProductId)
            .ValueGeneratedOnAdd();

        modelBuilder.Entity<User>()
            .HasOne(u => u.PrimaryAddress)
            .WithOne(pa => pa.User)
            .HasForeignKey<PrimaryAddress>(a => a.UserId);

        modelBuilder.Entity<User>()
            .HasMany(u => u.Addresses)
            .WithOne(a => a.User)
            .HasForeignKey(a => a.UserId)
            .IsRequired();

        modelBuilder.Entity<User>()
            .HasOne(u => u.Cart)
            .WithOne(c => c.User)
            .HasForeignKey<Cart>(c => c.UserId);
        
        modelBuilder.Entity<CartProduct>()
            .HasKey(cp => new { cp.CartId, cp.ProductId });
        
        modelBuilder.Entity<CartProduct>()
            .HasOne(cp => cp.Cart)
            .WithMany(c => c.CartProducts)
            .HasForeignKey(cp => cp.CartId);

        modelBuilder.Entity<CartProduct>()
            .HasOne(cp => cp.Product)
            .WithMany(p => p.CartProducts)
            .HasForeignKey(cp => cp.ProductId);
        
        modelBuilder.Entity<Rating>()
            .HasKey(r => new { r.UserId, r.ProductId });
    }
}
