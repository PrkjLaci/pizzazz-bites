﻿using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using PizzazzBitesBackend.Data;
using PizzazzBitesBackend.Models;

namespace PizzazzBitesBackend.Repository.Order;

public class OrderRepository : IOrderRepository
{
    private readonly ApplicationDbContext _context;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly ILogger<OrderRepository> _logger;
    private string UserId => _httpContextAccessor.HttpContext.User.FindAll(ClaimTypes.NameIdentifier).Last().Value;

    public OrderRepository(ApplicationDbContext context, IHttpContextAccessor httpContextAccessor, ILogger<OrderRepository> logger)
    {
        _context = context;
        _httpContextAccessor = httpContextAccessor;
        _logger = logger;
    }
    public async Task<Models.Order> AddOrder(Models.Order order)
    {
        try
        {
            var user = await _context.Users
                .Include(u => u.Cart)
                .ThenInclude(cart => cart.CartProducts)
                .ThenInclude(cartProduct => cartProduct.Product)
                .FirstOrDefaultAsync(u => u.Id == UserId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            var cart = user.Cart;
            if (cart == null || cart.CartProducts.Count == 0)
            {
                throw new Exception("Cart is empty");
            }
            
            var newOrder = new Models.Order
            {
                UserId = UserId,
                OrderProducts = cart.CartProducts.Select(cp => new OrderProduct
                {
                    ProductId = cp.ProductId,
                    Quantity = cp.Quantity,
                    Product = cp.Product,
                }).ToList(),
                Address = order.Address,
                PaymentMethod = order.PaymentMethod
            };
            
            _context.CartProducts.RemoveRange(cart.CartProducts);
            
            _context.Orders.Add(newOrder);
            await _context.SaveChangesAsync();
            return newOrder;
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
            throw new Exception(e.Message);
        }
    }
    
    public async Task<ICollection<Models.Order>> GetOrdersByUser()
    {
        try
        {
            var orders = await _context.Orders
                .Include(o => o.OrderProducts)
                .ThenInclude(op => op.Product)
                .Where(o => o.UserId == UserId)
                .ToListAsync();
            return orders;
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
            throw new Exception(e.Message);
        }
    }
}