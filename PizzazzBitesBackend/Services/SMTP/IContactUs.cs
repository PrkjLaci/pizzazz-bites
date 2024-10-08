using PizzazzBitesBackend.Models.SMTP;

namespace PizzazzBitesBackend.Services.SMTP;

public interface IContactUs
{
    public Task<bool> SendEmail(ContactUsEmailModel contactUsEmailModel);
}