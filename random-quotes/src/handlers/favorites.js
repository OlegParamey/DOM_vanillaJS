import { favoriteBtn } from '../../index.js';

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);
  isFavorite
    ? showFavoriteCard(text, author, container)
    : hideFavoriteCard(text);
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite, element) {
  element.classList.toggle("fa", isFavorite);
  element.classList.toggle("far", !isFavorite);
}

function showFavoriteBtn(btn) {
  btn.style.display = "inline-block";
}

function hideFavoriteBtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
		<p class="quote">${text}</p>
		<p id="quote-author"">${author}</p>
		`;
  container.appendChild(favoriteCard);
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
  toggleFavorite,
  hideFavoriteBtn,
};