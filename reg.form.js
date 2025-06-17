document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const errors = [];
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    

    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      message.textContent = ""; 
      message.textContent = `Thank you, ${firstName}! Your message has been sent.`;
      form.reset();
    }
  });
});
