using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using PizzazzBitesBackend.Models.SMTP;
using PizzazzBitesBackend.Services.SMTP;

namespace PizzazzBitesBackend.Controllers;

[ApiController]
[Route ("api/[controller]")]
public class ContactUsController : ControllerBase
{
    private readonly ILogger<ContactUsController> _logger;
    private readonly IContactUs _contactUs;

    public ContactUsController(ILogger<ContactUsController> logger, IContactUs contactUs)
    {
        _logger = logger;
        _contactUs = contactUs;
    }

    [HttpPost ("contact-us")]
    public async Task<IActionResult> SendEmail([FromBody] ContactUsEmailModel contactUsEmailModel)
    {
        try
        {
            var emailSent = await _contactUs.SendEmail(contactUsEmailModel);
            if (!emailSent)
            {
                return BadRequest(new { message = "Error sending email" });
            }
        }
        catch (Exception e)
        {
            _logger.LogError(e.Message);
            return BadRequest(new { message = e.Message });
        }

        return Ok(new { message = "Email sent successfully" });
    }
}