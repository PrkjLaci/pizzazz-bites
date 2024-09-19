namespace PizzazzBitesBackend.Repository.Rating;

public interface IRatingRepository
{
    Task AddRating(int productId, int value);
}