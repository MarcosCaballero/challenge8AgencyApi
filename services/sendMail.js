const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRIND_API_KEY); //ApiKey created in sendGrid
function sendMail(to, subject, text) {
  const msg = {
    to: to,
    from: process.env.SENDGRIND_EMAIL, // Use the email address or domain you verified above
    subject: subject,
    text: text,
    html: text,
  };
  try {
    sgMail.send(msg);
  } catch (error) {
    return error.code;
  }
}

module.exports = sendMail;
