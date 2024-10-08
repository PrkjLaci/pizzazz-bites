﻿using System.Text.Json.Serialization;
using PizzazzBitesBackend.Models.Cart;

namespace PizzazzBitesBackend.Models;

[JsonDerivedType(typeof(Pizza), "Pizza")]
public abstract class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public string? Ingredients { get; set; }
    public string ImageUrl { get; set; }
    public decimal Price { get; set; }
    public bool IsNew { get; set; }
    public decimal Rating { get; set; }
    public int RatingCount { get; set; }
    [JsonIgnore]
    public ICollection<CartProduct>? CartProducts { get; set; }
    [JsonIgnore]
    public ICollection<OrderProduct>? OrderProducts { get; set; }
}