function toggleFavoriteIcon(isFavorite, element) {
  element.classList.toggle("fa", isFavorite);
  element.classList.toggle("far", !isFavorite);
}

function showFavoriteCard(quote, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
		<p class="quote">${quote}</p>
		<p id="quote-author"">${author}</p>
		`;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };