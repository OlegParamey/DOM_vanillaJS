import { currentQuote } from './quote.js';
const toggleBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

toggleBtn.addEventListener("click", toggleFavorite);

hideBtn(toggleBtn);

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);
  currentQuote.isFavorite
    ? showFavoriteCard(currentQuote.text, currentQuote.author)
    : hideFavoriteCard(currentQuote.text);
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavorite, toggleBtn);
}

function toggleFavoriteIcon(isFavorite, element) {
  element.classList.toggle("fa", isFavorite);
  element.classList.toggle("far", !isFavorite);
}

function showBtn(btn) {
  btn.style.display = "inline-block";
}

function hideBtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(text, author) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
		<p class="quote">${text}</p>
		<p id="quote-author"">${author}</p>
		`;
  favoritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
}

export {
  handleFavorite,
};