const TIMEZONE = "Europe/Berlin";
const ROTATION_START = "2026-04-20"; // Montag = Start von Woche 1

const FOUR_WEEK_SPECIALS = [
  {
    happyHourAlcoholic: ["gin-fizz", "blue-lagoon", "tequila-sunrise"],
    happyHourVirgin: "miami",
    cocktailOfTheEvening: "pisco-sour"
  },
  {
    happyHourAlcoholic: ["melon-sour", "pina-colada", "sex-on-the-beach"],
    happyHourVirgin: "ipanema",
    cocktailOfTheEvening: "espresso-martini"
  },
  {
    happyHourAlcoholic: ["solero", "moscow-mule", "paloma"],
    happyHourVirgin: "maracuja-mule",
    cocktailOfTheEvening: "whiskey-sour"
  },
  {
    happyHourAlcoholic: ["mai-tai", "mojito", "pornstar-martini"],
    happyHourVirgin: "virgin-colada",
    cocktailOfTheEvening: "margarita"
  }
];

function getBerlinDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("de-DE", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  const parts = formatter.formatToParts(date);
  const map = {};

  parts.forEach((part) => {
    if (part.type !== "literal") {
      map[part.type] = part.value;
    }
  });

  const weekdayMap = {
    So: 0,
    Mo: 1,
    Di: 2,
    Mi: 3,
    Do: 4,
    Fr: 5,
    Sa: 6
  };

  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    hour: Number(map.hour),
    minute: Number(map.minute),
    second: Number(map.second),
    weekday: weekdayMap[map.weekday]
  };
}

function getBerlinDateOnly(date = new Date()) {
  const parts = getBerlinDateParts(date);
  return new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
}

function getRotationPlanForDate(dateObj) {
  const startDate = new Date(`${ROTATION_START}T00:00:00Z`);
  const diffMs = dateObj - startDate;
  const diffDays = Math.floor(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);

  if (diffWeeks < 0) {
    return FOUR_WEEK_SPECIALS[0];
  }

  return FOUR_WEEK_SPECIALS[diffWeeks % 4];
}

function getCurrentWeekPlan() {
  return getRotationPlanForDate(getBerlinDateOnly());
}

// Samstag 10:00 bis Sonntag 09:59
function areSpecialsVisible() {
  const now = getBerlinDateParts();

  return (
    (now.weekday === 6 && now.hour >= 10) ||
    (now.weekday === 0 && now.hour < 10)
  );
}

// Happy Hour nur Samstag 10:00 bis 23:59
function isHappyHourActive() {
  const now = getBerlinDateParts();
  return now.weekday === 6 && now.hour >= 10;
}

// Cocktail des Abends Samstag 10:00 bis Sonntag 09:59
function isCocktailOfTheEveningActive() {
  return areSpecialsVisible();
}

function updateSpecialButtonVisibility() {
  const button = document.getElementById("special-button");
  if (!button) return;

  button.style.display = areSpecialsVisible() ? "inline-block" : "none";
}

function restoreOriginalPrices(cards) {
  cards.forEach((card) => {
    const priceEl = card.querySelector(".price");
    if (!priceEl) return;

    if (!priceEl.dataset.originalPrice) {
      priceEl.dataset.originalPrice = priceEl.textContent.trim();
    }

    priceEl.textContent = priceEl.dataset.originalPrice;
  });
}

function clearDynamicSpecials(cards) {
  cards.forEach((card) => {
    card.classList.remove("happy-hour", "cocktail-abend");
  });
}

function applyWeeklySpecials(cards) {
  restoreOriginalPrices(cards);
  clearDynamicSpecials(cards);

  const plan = getCurrentWeekPlan();
  if (!plan) return;

  const happyHourActive = isHappyHourActive();
  const cocktailOfEveningActive = isCocktailOfTheEveningActive();

  cards.forEach((card) => {
    const drinkId = card.dataset.drinkId;
    if (!drinkId) return;

    const isAlcoholicHappyHour = plan.happyHourAlcoholic.includes(drinkId);
    const isVirginHappyHour = plan.happyHourVirgin === drinkId;
    const isCocktailOfTheEvening = plan.cocktailOfTheEvening === drinkId;

    if (happyHourActive && (isAlcoholicHappyHour || isVirginHappyHour)) {
      card.classList.add("happy-hour");
    }

    if (cocktailOfEveningActive && isCocktailOfTheEvening) {
      card.classList.add("cocktail-abend");

      const priceEl = card.querySelector(".price");
      if (priceEl) {
        priceEl.textContent = "6,00€";
      }
    }
  });
}

function cardMatchesFilter(card, selectedCategory) {
  const baseCategory = card.dataset.category;

  if (selectedCategory === "all") return true;

  if (selectedCategory === "specials") {
    return (
      card.classList.contains("happy-hour") ||
      card.classList.contains("cocktail-abend")
    );
  }

  if (selectedCategory === "Seasonal") {
    return card.classList.contains("seasonal");
  }

  return baseCategory === selectedCategory;
}

function applyCurrentFilter(cards) {
  const activeBtn = document.querySelector(".category-btn.active");
  const selectedCategory = activeBtn ? activeBtn.dataset.category : "all";

  cards.forEach((card) => {
    if (cardMatchesFilter(card, selectedCategory)) {
      card.classList.add("active-display");
    } else {
      card.classList.remove("active-display");
      card.classList.remove("open");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const categoryBtns = document.querySelectorAll(".category-btn");

  applyWeeklySpecials(cards);
  updateSpecialButtonVisibility();
  applyCurrentFilter(cards);

  cards.forEach((card) => {
    const button = card.querySelector(".card-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
      const wasOpen = card.classList.contains("open");

      cards.forEach((c) => c.classList.remove("open"));

      if (!wasOpen) {
        card.classList.add("open");
      }
    });
  });

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyCurrentFilter(cards);
    });
  });

  setInterval(() => {
    applyWeeklySpecials(cards);
    updateSpecialButtonVisibility();
    applyCurrentFilter(cards);
  }, 60000);
});
