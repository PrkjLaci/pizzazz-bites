using Microsoft.AspNetCore.Identity;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Services.Authentication;

public class AuthenticationSeeder
{
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly UserManager<User> _userManager;

    public AuthenticationSeeder(RoleManager<IdentityRole> roleManager, UserManager<User> userManager)
    {
        _roleManager = roleManager;
        _userManager = userManager;
    }

    public void AddRoles()
    {
        var tAdmin = CreateAdminRole(_roleManager);
        tAdmin.Wait();
        var tUser = CreateUserRole(_roleManager);
        tUser.Wait();
    }

    private async Task CreateAdminRole(RoleManager<IdentityRole> roleManager)
    {
        await roleManager.CreateAsync(new IdentityRole("Admin"));
    }

    async Task CreateUserRole(RoleManager<IdentityRole> roleManager)
    {
        await roleManager.CreateAsync(new IdentityRole("User"));
    }

    public void AddAdmin()
    {
        var tAdmin = CreateAdminIfNotExists();
        tAdmin.Wait();
    }
    
    public void AddTestUser()
    {
        var tUser = CreateTestUserIfNotExists();
        tUser.Wait();
    }

    private async Task CreateAdminIfNotExists()
    {
        var adminInDb = await _userManager.FindByEmailAsync("admin@admin.com");
        if (adminInDb == null)
        {
            var admin = new User
                { UserName = "admin", Email = "admin@admin.com", FirstName = "Admin", LastName = "Admin" };
            var adminCreated = await _userManager.CreateAsync(admin, "admin123");

            if (adminCreated.Succeeded)
            {
                await _userManager.AddToRoleAsync(admin, "Admin");
            }
        }
    }

    private async Task CreateTestUserIfNotExists()
    {
        var userInDb = await _userManager.FindByEmailAsync("johndoe@test.com");
        if (userInDb == null)
        {
            var addresses = new List<Address>
            {
                new()
                {
                    HouseNumber = "1", 
                    Street = "Test Street", 
                    City = "Test City", 
                    State = "Test State",
                    ZipCode = "1000", 
                    Country = "Test Country"
                },
                new()
                {
                    HouseNumber = "2", 
                    Street = "Test Street 2", 
                    City = "Test City 2", 
                    State = "Test State2",
                    ZipCode = "2000", 
                    Country = "Test Country 2"
                },
                new()
                {
                    HouseNumber = "3", 
                    Street = "Test Street 3", 
                    City = "Test City 3", 
                    State = "Test State3",
                    ZipCode = "3000", 
                    Country = "Test Country 3"
                }
            };

            var user = new User
            {
                UserName = "johndoe@test.com",
                Email = "johndoe@test.com",
                FirstName = "John",
                LastName = "Doe",
                Addresses = addresses,
            };
            var userCreated = await _userManager.CreateAsync(user, "test123");

            if (userCreated.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "User");
            }
        }
    }
}