using PizzazzBitesBackend.Models.Enum;

namespace PizzazzBitesBackend.Models;

public class CharcuterieBoard : Product
{
    public int ProductId { get; set; }
    public string ServingSize { get; set; }
    public CharcuterieBoardType CharcuterieBoardType { get; set; }
}