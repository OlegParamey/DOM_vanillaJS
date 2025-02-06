import quotes from './src/data/quotes.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';
import { handleQuote } from './src/handlers/quote.js';

let currentQuote = null;

function setCurrentQuote(quote) {
	currentQuote = quote;
}

const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", () =>
	toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer));

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", () =>
	handleQuote(quotes, setCurrentQuote));


export { quoteFavoriteBtn };