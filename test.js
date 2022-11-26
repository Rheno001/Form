function sendEmail() {
    Email.send({
        Host : "smtp.elasticeemail.com",
        Username : "renfredreuben@gmail.com",
        Password : "reno1738",
        To : 'renfredreuben@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}