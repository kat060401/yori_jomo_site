const searchToggle = document.querySelector(".search-toggle");
const searchForm = document.querySelector(".search-form");
const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");

searchToggle.addEventListener("click", () => {
  const isOpen = searchForm.classList.toggle("is-open");
  searchToggle.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) searchForm.querySelector("input").focus();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-actions")) {
    searchForm.classList.remove("is-open");
    searchToggle.setAttribute("aria-expanded", "false");
  }
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchForm.querySelector("input").value.trim();
  if (query) alert(`Søgning efter: ${query}\nTilslut formularen til din webshop-søgefunktion.`);
});

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".form-message").textContent = "Tak! Du er tilmeldt (demo).";
});
