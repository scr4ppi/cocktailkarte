function checkSpecialButtonVisibility() {
  const TEST_MODE = false;

  const now = new Date();
  const day = now.getDay(); // 0 = Sonntag, 6 = Samstag
  const hour = now.getHours();
  const button = document.getElementById("special-button");

  if (!button) return;

  const isVisible = (day === 6 && hour >= 10) || (day === 0 && hour < 12);

  button.style.display = (TEST_MODE || isVisible) ? "inline-block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  checkSpecialButtonVisibility();

  const cards = document.querySelectorAll(".card");
  const categoryBtns = document.querySelectorAll(".category-btn");

  cards.forEach((card) => {
    const button = card.querySelector(".card-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      cards.forEach((c) => c.classList.remove("open"));

      if (!isOpen) {
        card.classList.add("open");
      }
    });
  });

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedCategory = btn.dataset.category;

      cards.forEach((card) => {
        const cardCategories = card.dataset.category.split(" ");

        if (selectedCategory === "all" || cardCategories.includes(selectedCategory)) {
          card.classList.add("active-display");
        } else {
          card.classList.remove("active-display");
          card.classList.remove("open");
        }
      });
    });
  });
});
