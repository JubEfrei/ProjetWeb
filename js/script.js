document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const lastname = document.getElementById("lastname").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Affiche une confirmation avec animation
    confirmation.textContent = `Merci ${firstname} ${lastname}, nous vous contacterons bientôt à l'adresse ${email}.`;
    confirmation.classList.add("show");
    alert(`Merci ${firstname} ${lastname}, nous vous contacterons bientôt à l'adresse ${email}.`);

    // Réinitialise le formulaire après une courte pause
    setTimeout(() => {
      form.reset();
    }, 500);

    // Optionnel : faire disparaître le message après quelques secondes
    setTimeout(() => {
      confirmation.classList.remove("show");
    }, 5000);
  });
});
