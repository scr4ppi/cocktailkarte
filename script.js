  function checkSpecialButtonVisibility() {
    // Ändere dies auf 'false', wenn die Automatik live gehen soll!
    const TEST_MODE = false; 

    const now = new Date();
    const day = now.getDay();   // 0 = Sonntag, 6 = Samstag
    const hour = now.getHours();
    const button = document.getElementById('special-button');

    // Prüfe die Zeit-Logik
    let isVisible = (day === 6 && hour >= 10) || (day === 0 && hour < 12);

    // Wenn der Test-Modus aktiv ist, überschreiben wir das Ergebnis
    if (TEST_MODE || isVisible) {
      button.style.display = 'inline-block';
    } else {
      button.style.display = 'none';
    }
  }

  window.onload = checkSpecialButtonVisibility;


const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    const button = card.querySelector('.card-toggle');
    button.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });

  // Multi-Kategorie Filterung
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Buttons Styling updaten
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.dataset.category;

      cards.forEach(card => {
        // Wir holen die Kategorien des Drinks und wandeln sie in ein Array um
        const cardCategories = card.dataset.category.split(' ');

        if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
          card.classList.add('active-display');
        } else {
          card.classList.remove('active-display');
          card.classList.remove('open'); // Optional: Schließt die Karte beim Filtern
        }
