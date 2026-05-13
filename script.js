const TIMEZONE = "Europe/Berlin";
const ROTATION_START = "2026-04-27";

const FOUR_WEEK_SPECIALS = [
  {
    happyHourAlcoholic: ["tequila-sunrise", "cuba-libre", "blue-lagoon"],
    happyHourVirgin: "ipanema",
    cocktailOfTheEvening: "whiskey-sour"
  },
  {
    happyHourAlcoholic: ["melon-sour", "blue-lagoon", "pina-colada"],
    happyHourVirgin: "maracuja-mule",
    cocktailOfTheEvening: "espresso-martini"
  },
  {
    happyHourAlcoholic: ["bahama-mama", "gin-fizz", "sex-on-the-beach"],
    happyHourVirgin: "virgin-colada",
    cocktailOfTheEvening: "pisco-sour"
  },
  {
    happyHourAlcoholic: ["touchdown", "solero", "pina-colada"],
    happyHourVirgin: "miami",
    cocktailOfTheEvening: "margarita"
  }
];

const MANUAL_EVENT_ACTIVE = true;
const MANUAL_EVENT_PRICE = "0,00€";

const MANUAL_EVENT_COCKTAILS = [
  "espresso-martini",
  "solero",
  "touchdown",
  "cuba-libre"
];

const cocktailProfiles = [
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    note: "Kräftig, sauer und klassisch.",
    fruity: 1,
    alcohol: 4,
    sweet: 2,
    sour: 5,
    bitter: 1,
    creamy: 3
  },
  {
    id: "pisco-sour",
    name: "Pisco Sour",
    note: "Sauer, frisch und cremig.",
    fruity: 2,
    alcohol: 4,
    sweet: 2,
    sour: 5,
    bitter: 1,
    creamy: 4
  },
  {
    id: "melon-sour",
    name: "Melon Sour",
    note: "Fruchtig, süß-sauer und auffällig.",
    fruity: 5,
    alcohol: 3,
    sweet: 4,
    sour: 4,
    bitter: 0,
    creamy: 2
  },
  {
    id: "gin-fizz",
    name: "Gin Fizz",
    note: "Frisch, leicht sauer und spritzig.",
    fruity: 2,
    alcohol: 3,
    sweet: 2,
    sour: 4,
    bitter: 1,
    creamy: 1
  },
  {
    id: "mai-tai",
    name: "Mai Tai",
    note: "Tropisch, kräftig und rumlastig.",
    fruity: 4,
    alcohol: 5,
    sweet: 3,
    sour: 3,
    bitter: 1,
    creamy: 0
  },
  {
    id: "zombie",
    name: "Zombie",
    note: "Sehr stark, tropisch und fruchtig.",
    fruity: 5,
    alcohol: 5,
    sweet: 4,
    sour: 3,
    bitter: 1,
    creamy: 0
  },
  {
    id: "negroni",
    name: "Negroni",
    note: "Bitter, stark und spirit-forward.",
    fruity: 0,
    alcohol: 5,
    sweet: 2,
    sour: 0,
    bitter: 5,
    creamy: 0
  },
  {
    id: "martini",
    name: "Martini",
    note: "Trocken, stark und sehr klassisch.",
    fruity: 0,
    alcohol: 5,
    sweet: 0,
    sour: 0,
    bitter: 2,
    creamy: 0
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    note: "Kräftig, süßlich und koffeinhaltig.",
    fruity: 0,
    alcohol: 4,
    sweet: 3,
    sour: 0,
    bitter: 3,
    creamy: 2
  },
  {
    id: "pina-colada",
    name: "Piña Colada",
    note: "Cremig, süß und tropisch.",
    fruity: 5,
    alcohol: 3,
    sweet: 5,
    sour: 1,
    bitter: 0,
    creamy: 5
  },
  {
    id: "sex-on-the-beach",
    name: "Sex on the Beach",
    note: "Fruchtig, süß und leicht trinkbar.",
    fruity: 5,
    alcohol: 3,
    sweet: 4,
    sour: 2,
    bitter: 0,
    creamy: 0
  },
  {
    id: "tequila-sunrise",
    name: "Tequila Sunrise",
    note: "Fruchtig, süß und orangebetont.",
    fruity: 5,
    alcohol: 3,
    sweet: 4,
    sour: 1,
    bitter: 0,
    creamy: 0
  },
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    note: "Frisch, würzig und leicht sauer.",
    fruity: 2,
    alcohol: 3,
    sweet: 2,
    sour: 3,
    bitter: 1,
    creamy: 0
  },
  {
    id: "paloma",
    name: "Paloma",
    note: "Herb-fruchtig, frisch und tequila-basiert.",
    fruity: 4,
    alcohol: 3,
    sweet: 2,
    sour: 3,
    bitter: 3,
    creamy: 0
  },
  {
    id: "mojito",
    name: "Mojito",
    note: "Frisch, minzig und limettig.",
    fruity: 2,
    alcohol: 3,
    sweet: 3,
    sour: 4,
    bitter: 0,
    creamy: 0
  },
  {
    id: "caipirinha",
    name: "Caipirinha",
    note: "Limettig, kräftig und süß-sauer.",
    fruity: 2,
    alcohol: 4,
    sweet: 3,
    sour: 5,
    bitter: 0,
    creamy: 0
  },
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    note: "Süß-sauer, frisch und auffällig.",
    fruity: 4,
    alcohol: 3,
    sweet: 4,
    sour: 3,
    bitter: 0,
    creamy: 0
  },
  {
    id: "pornstar-martini",
    name: "Pornstar Martini",
    note: "Maracuja, Vanille und kräftiger Vodka.",
    fruity: 5,
    alcohol: 4,
    sweet: 4,
    sour: 2,
    bitter: 0,
    creamy: 1
  },
  {
    id: "margarita",
    name: "Margarita",
    note: "Tequila, Limette und kräftige Säure.",
    fruity: 2,
    alcohol: 4,
    sweet: 2,
    sour: 5,
    bitter: 1,
    creamy: 0
  },
  {
    id: "solero",
    name: "Solero",
    note: "Vanillig, fruchtig und cremig-süß.",
    fruity: 5,
    alcohol: 3,
    sweet: 5,
    sour: 2,
    bitter: 0,
    creamy: 3
  },
  {
    id: "cuba-libre",
    name: "Cuba Libre",
    note: "Rum, Cola und Limette. Süß, frisch und unkompliziert.",
    fruity: 2,
    alcohol: 3,
    sweet: 3,
    sour: 2,
    bitter: 1,
    creamy: 0
  },
  {
    id: "bahama-mama",
    name: "Bahama Mama",
    note: "Tropisch, fruchtig und rumlastig.",
    fruity: 5,
    alcohol: 4,
    sweet: 4,
    sour: 2,
    bitter: 0,
    creamy: 1
  },
  {
    id: "touchdown",
    name: "Touchdown",
    note: "Fruchtig, süß-sauer und partygeeignet.",
    fruity: 5,
    alcohol: 3,
    sweet: 4,
    sour: 3,
    bitter: 0,
    creamy: 0
  }
];

const tasteLabels = [
  { key: "fruity", label: "Fruchtig" },
  { key: "alcohol", label: "Alkohol" },
  { key: "sweet", label: "Süß" },
  { key: "sour", label: "Sauer" },
  { key: "bitter", label: "Bitter" },
  { key: "creamy", label: "Cremig" }
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
    "So": 0,
    "So.": 0,
    "Mo": 1,
    "Mo.": 1,
    "Di": 2,
    "Di.": 2,
    "Mi": 3,
    "Mi.": 3,
    "Do": 4,
    "Do.": 4,
    "Fr": 5,
    "Fr.": 5,
    "Sa": 6,
    "Sa.": 6
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

  if (diffWeeks < 0) return FOUR_WEEK_SPECIALS[0];

  return FOUR_WEEK_SPECIALS[diffWeeks % 4];
}

function getCurrentWeekPlan() {
  return getRotationPlanForDate(getBerlinDateOnly());
}

function areSpecialsVisible() {
  const now = getBerlinDateParts();

  return (
    (now.weekday === 6 && now.hour >= 10) ||
    (now.weekday === 0 && now.hour < 10)
  );
}

function isHappyHourActive() {
  const now = getBerlinDateParts();

  return now.weekday === 6 && now.hour >= 10;
}

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
    card.classList.remove("happy-hour", "cocktail-abend", "manual-event");
  });
}

function applyManualEventSpecials(cards) {
  if (!MANUAL_EVENT_ACTIVE) return;

  cards.forEach((card) => {
    const drinkId = card.dataset.drinkId;

    if (!drinkId) return;

    if (MANUAL_EVENT_COCKTAILS.includes(drinkId)) {
      card.classList.add("manual-event");

      const priceEl = card.querySelector(".price");

      if (priceEl) {
        priceEl.textContent = MANUAL_EVENT_PRICE;
      }
    }
  });
}

function applyWeeklySpecials(cards) {
  restoreOriginalPrices(cards);
  clearDynamicSpecials(cards);

  const plan = getCurrentWeekPlan();

  if (plan) {
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

  applyManualEventSpecials(cards);
}

function cardMatchesFilter(card, selectedCategory) {
  const baseCategory = card.dataset.category;

  if (selectedCategory === "all") return true;

  if (selectedCategory === "specials") {
    return (
      card.classList.contains("happy-hour") ||
      card.classList.contains("cocktail-abend") ||
      card.classList.contains("manual-event")
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

function getWantedProfile(tasteInputs) {
  const profile = {};

  tasteInputs.forEach((input) => {
    profile[input.dataset.taste] = Number(input.value);
  });

  return profile;
}

function calculateMatch(wanted, cocktail) {
  let difference = 0;

  tasteLabels.forEach((item) => {
    difference += Math.abs(wanted[item.key] - cocktail[item.key]);
  });

  const maxDifference = tasteLabels.length * 5;
  const match = Math.round((1 - difference / maxDifference) * 100);

  return Math.max(0, match);
}

function getSortedMatches(tasteInputs) {
  const wanted = getWantedProfile(tasteInputs);

  return cocktailProfiles
    .map((cocktail) => ({
      ...cocktail,
      match: calculateMatch(wanted, cocktail)
    }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 5);
}

function getAngle(index, total) {
  return -Math.PI / 2 + index * ((Math.PI * 2) / total);
}

function drawPolygon(ctx, centerX, centerY, radius, sides, fill) {
  ctx.beginPath();

  for (let i = 0; i < sides; i++) {
    const angle = getAngle(i, sides);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();

  if (fill) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

function drawRadar(radarCanvas, tasteInputs) {
  if (!radarCanvas) return;

  const ctx = radarCanvas.getContext("2d");
  const wanted = getWantedProfile(tasteInputs);

  const width = radarCanvas.width;
  const height = radarCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = 95;

  ctx.clearRect(0, 0, width, height);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
  ctx.fillStyle = "rgba(255, 255, 255, 0.62)";
  ctx.font = "11px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let level = 1; level <= 5; level++) {
    const radius = (maxRadius / 5) * level;
    drawPolygon(ctx, centerX, centerY, radius, tasteLabels.length, false);
  }

  tasteLabels.forEach((item, index) => {
    const angle = getAngle(index, tasteLabels.length);
    const x = centerX + Math.cos(angle) * (maxRadius + 24);
    const y = centerY + Math.sin(angle) * (maxRadius + 24);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + Math.cos(angle) * maxRadius,
      centerY + Math.sin(angle) * maxRadius
    );
    ctx.stroke();

    ctx.fillText(item.label, x, y);
  });

  ctx.beginPath();

  tasteLabels.forEach((item, index) => {
    const value = wanted[item.key];
    const radius = (maxRadius / 5) * value;
    const angle = getAngle(index, tasteLabels.length);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.closePath();
  ctx.fillStyle = "rgba(255, 51, 51, 0.32)";
  ctx.fill();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(255, 51, 51, 0.95)";
  ctx.stroke();
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const categoryBtns = document.querySelectorAll(".category-btn");

  const openDrinkFinderBtn = document.getElementById("openDrinkFinder");
  const closeDrinkFinderBtn = document.getElementById("closeDrinkFinder");
  const drinkFinderModal = document.getElementById("drinkFinderModal");
  const tasteInputs = document.querySelectorAll("[data-taste]");
  const finderResults = document.getElementById("finderResults");
  const radarCanvas = document.getElementById("tasteRadar");

  function closeDrinkFinder() {
    if (!drinkFinderModal) return;

    drinkFinderModal.classList.remove("show");
    drinkFinderModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderFinderResults() {
    if (!finderResults) return;

    const matches = getSortedMatches(tasteInputs);

    finderResults.innerHTML = matches
      .map((drink) => `
        <button class="finder-result" type="button" data-target-drink="${drink.id}">
          <strong>${drink.name} <span class="finder-match">${drink.match}%</span></strong>
          <span>${drink.note}</span>
        </button>
      `)
      .join("");

    document.querySelectorAll("[data-target-drink]").forEach((button) => {
      button.addEventListener("click", () => {
        const drinkId = button.dataset.targetDrink;
        const card = document.querySelector(`[data-drink-id="${drinkId}"]`);

        if (!card) {
          alert("Dieser Cocktail ist aktuell nicht als Karte auf der Seite vorhanden.");
          return;
        }

        closeDrinkFinder();

        cards.forEach((c) => c.classList.remove("open"));

        setTimeout(() => {
          card.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

          card.classList.add("open");

          const toggle = card.querySelector(".card-toggle");

          if (toggle) {
            toggle.setAttribute("aria-expanded", "true");
          }
        }, 120);
      });
    });
  }

  function updateDrinkFinder() {
    drawRadar(radarCanvas, tasteInputs);
    renderFinderResults();
  }

  function openDrinkFinder() {
    if (!drinkFinderModal) return;

    drinkFinderModal.classList.add("show");
    drinkFinderModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    updateDrinkFinder();
  }

  document.querySelectorAll(".card-image").forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => {
        img.classList.add("loaded");
      });
    }
  });

  applyWeeklySpecials(cards);
  updateSpecialButtonVisibility();
  applyCurrentFilter(cards);

  cards.forEach((card) => {
    const button = card.querySelector(".card-toggle");

    if (!button) return;

    button.addEventListener("click", () => {
      const wasOpen = card.classList.contains("open");
      const drinkTitle = card.querySelector(".card-title")?.innerText || "Unbekannt";

      cards.forEach((c) => c.classList.remove("open"));

      if (!wasOpen) {
        card.classList.add("open");

        if (typeof gtag === "function") {
          gtag("event", "view_drink_details", {
            drink_name: drinkTitle
          });
        }
      }
    });
  });

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const categoryName = btn.innerText || btn.dataset.category;

      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      applyCurrentFilter(cards);

      if (typeof gtag === "function") {
        gtag("event", "select_category", {
          category_id: categoryName.trim()
        });
      }
    });
  });

  if (openDrinkFinderBtn) {
    openDrinkFinderBtn.addEventListener("click", openDrinkFinder);
  }

  if (closeDrinkFinderBtn) {
    closeDrinkFinderBtn.addEventListener("click", closeDrinkFinder);
  }

  if (drinkFinderModal) {
    drinkFinderModal.addEventListener("click", (event) => {
      if (event.target === drinkFinderModal) {
        closeDrinkFinder();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrinkFinder();
    }
  });

  tasteInputs.forEach((input) => {
    input.addEventListener("input", updateDrinkFinder);
  });

  updateDrinkFinder();

  setInterval(() => {
    applyWeeklySpecials(cards);
    updateSpecialButtonVisibility();
    applyCurrentFilter(cards);
  }, 60000);
});
