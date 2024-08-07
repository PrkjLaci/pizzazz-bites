﻿using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;

public class Dessert
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public string? Ingredients { get; set; }
    public string ImageUrl { get; set; }
    public decimal Price { get; set; }
    public bool IsLactoseFree { get; set; }
    public bool IsGlutenFree { get; set; }
    public bool IsNew { get; set; }
    public DessertType DessertType { get; set; }
    public decimal Rating { get; set; }
    public int RatingCount { get; set; }
}