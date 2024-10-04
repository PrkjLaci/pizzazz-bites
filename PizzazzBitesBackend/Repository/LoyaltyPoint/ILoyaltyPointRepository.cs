namespace PizzazzBitesBackend.Repository.LoyaltyPoint;

public interface ILoyaltyPointRepository
{
    public Task AddLoyaltyPoint(decimal pointsAfterOrder);
    public Task<decimal> GetLoyaltyPoints();
    public Task UseLoyaltyPoint(decimal pointsToUse);
}