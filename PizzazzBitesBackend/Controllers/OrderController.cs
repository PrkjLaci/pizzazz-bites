﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Models;
using PizzazzBitesBackend.Repository.LoyaltyPoint;
using PizzazzBitesBackend.Repository.Order;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
    private readonly IOrderRepository _orderRepository;
    private readonly ILoyaltyPointRepository _loyaltyPointRepository;
    private readonly ILogger<OrderController> _logger;

    public OrderController(IOrderRepository orderRepository, ILoyaltyPointRepository loyaltyPointRepository, ILogger<OrderController> logger)
    {
        _orderRepository = orderRepository;
        _loyaltyPointRepository = loyaltyPointRepository;
        _logger = logger;
    }
    
    [Authorize (Roles = "User")]
    [HttpPost("add-order")]
    public async Task<IActionResult> AddOrder([FromBody] Order order)
    {
        try
        {
            var newOrder = await _orderRepository.AddOrder(order);
            var totalLoyaltyPoints = await _loyaltyPointRepository.GetLoyaltyPoints();
            return Ok(new { message = "Order added successfully.", data = newOrder, loyaltyPointsEarned = newOrder.LoyaltyPointsEarned, totalLoyaltyPoints = totalLoyaltyPoints });
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
            return BadRequest(new { message = e.Message });
        }
    }
    
    [Authorize(Roles = "User")]
    [HttpGet("get-orders-by-user")]
    public async Task<ActionResult<ICollection<Order>>> GetOrdersByUser()
    {
        try
        {
            var orders = await _orderRepository.GetOrdersByUser();
            return Ok(new { message = "Orders found successfully.", data = orders });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Can't find orders by user.");
            return NotFound(new { message = "Can't find orders by user." });
        }
    }
}