using System.Net;
using System.Net.Mail;
using PizzazzBitesBackend.Models.SMTP;

namespace PizzazzBitesBackend.Services.SMTP;

public class ContactUs : IContactUs
{
    private readonly ILogger<ContactUs> _logger;

    public ContactUs(ILogger<ContactUs> logger)
    {
        _logger = logger;
    }

    public async Task<bool> SendEmail(ContactUsEmailModel contactUsEmailModel)
    {
        try
        {
            var fromAddress = new MailAddress(contactUsEmailModel.Email, contactUsEmailModel.Name);
            var toAddress = new MailAddress(Environment.GetEnvironmentVariable("EMAIL_USERNAME")!);
            var messageToSend = new MailMessage(fromAddress, toAddress)
            {
                Subject = contactUsEmailModel.Subject,
                Body = $"Name: {contactUsEmailModel.Name}\n\n{contactUsEmailModel.Message}",
                IsBodyHtml = false
            };
            
            messageToSend.ReplyToList.Add(new MailAddress(contactUsEmailModel.Email));

            using var smtpClient = new SmtpClient("smtp.gmail.com", 587);
            smtpClient.Credentials = new NetworkCredential(Environment.GetEnvironmentVariable("EMAIL_USERNAME"),
                Environment.GetEnvironmentVariable("EMAIL_PASSWORD"));
            smtpClient.EnableSsl = true;

            await smtpClient.SendMailAsync(messageToSend);

            return true;
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Error sending email");
            return false;
        }
    }
}