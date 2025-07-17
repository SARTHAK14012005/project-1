// Clove Dental - Basic Interactivity JS

document.addEventListener("DOMContentLoaded", () => {
  // Scroll to bottom appointment form
  const bookButtons = document.querySelectorAll(".btn");
  const appointmentForm = document.querySelector(".appointment-form");

  bookButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (btn.innerText.includes("Book")) {
        e.preventDefault();
        appointmentForm.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Simple fake captcha
  const captchaInputs = document.querySelectorAll('input[placeholder="Captcha"]');
  captchaInputs.forEach(input => {
    input.placeholder = "Type 1234";
  });

  // Form validation
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector('input[placeholder="Name"]');
      const phone = form.querySelector('input[placeholder="Phone"], input[placeholder="Mobile Number"]');
      const captcha = form.querySelector('input[placeholder="Captcha"]');
      const agree = form.querySelector('input[type="checkbox"]');

      if (!name.value || !phone.value || !captcha.value || !agree.checked) {
        e.preventDefault();
        alert("Please fill all fields and agree to the terms.");
      } else if (captcha.value.trim() !== "1234") {
        e.preventDefault();
        alert("Captcha incorrect. Please enter 1234.");
      }
    });
  });
});