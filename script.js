
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
