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

document.addEventListener('DOMContentLoaded', function() {
    // Afficher le popup après un court délai (pour l'animation)
    setTimeout(function() {
        const popup = document.getElementById('welcome-popup');
        popup.classList.add('is-visible');
        
        // Stocker en session que le popup a été vu
        sessionStorage.setItem('popupSeen', 'true');
    }, 800); // Délai de 800ms pour un effet plus naturel

    // Fermer le popup
    document.querySelector('.popup__close').addEventListener('click', closePopup);
    document.querySelector('.btn--accept').addEventListener('click', closePopup);
    
    // Fermer en cliquant à l'extérieur
    document.getElementById('welcome-popup').addEventListener('click', function(e) {
        if (e.target === this) {
            closePopup();
        }
    });

    // Fonction de fermeture
    function closePopup() {
        const popup = document.getElementById('welcome-popup');
        popup.classList.remove('is-visible');
    }
});