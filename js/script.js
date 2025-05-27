document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi réel du formulaire

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    confirmation.textContent = `Merci ${name}, nous vous contacterons bientôt à l'adresse ${email}.`;

    form.reset(); // Réinitialise le formulaire
  });
});