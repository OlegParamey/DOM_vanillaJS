import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-btn");
const quoteAuthorElement = document.getElementById("quote-author");
const toggleFavoriteButton = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex = null;

function generateRandomQuote() {
	let randomIndex = null;
	do {
		randomIndex = Math.floor(Math.random() * quotes.length);
	} while (currentQuoteIndex == randomIndex);
	currentQuoteIndex = randomIndex;
	const randomQuote = quotes[randomIndex];
	quoteElement.textContent = randomQuote.quote;
	quoteAuthorElement.textContent = randomQuote.author;
	toggleFavoriteButton.textContent = randomQuote.isFavorite ? "Remove from favorites" : "Add to favorites";
	toggleFavoriteButton.style.display = "inline-block";
}

function toggleFavorite() {
	if (currentQuoteIndex === null || !quotes[currentQuoteIndex]) return;
	const currentQuote = quotes[currentQuoteIndex];
	currentQuote.isFavorite = !currentQuote.isFavorite;
	toggleFavoriteButton.textContent = currentQuote.isFavorite ? "Remove from favorites" : "Add to favorites";

	if (currentQuote.isFavorite) {
		const favoriteCard = document.createElement("div");
		favoriteCard.classList.add("favorite-card");
		favoriteCard.innerHTML = `
		<p class="quote">${currentQuote.quote}</p>
		<p id="quote-author"">${currentQuote.author}</p>
		`;
		favoritesContainer.appendChild(favoriteCard);
	} else {
		const favoriteCards = document.querySelectorAll(".favorite-card");
		favoriteCards.forEach((card) => {
			if (card.textContent.includes(currentQuote.quote)) {
				card.remove();
			}
		});
	}
}

generateButton.addEventListener("click", generateRandomQuote);
toggleFavoriteButton.addEventListener("click", toggleFavorite);