import quotes from "./src/quotes.js";
import { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard } from "./src/favoritesHandler.js";

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
	toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteButton);
	toggleFavoriteButton.style.display = "inline-block";
}

function toggleFavorite() {
	const currentQuote = quotes[currentQuoteIndex];
	currentQuote.isFavorite = !currentQuote.isFavorite;
	toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteButton);
	currentQuote.isFavorite
		? showFavoriteCard(currentQuote.quote, currentQuote.author, favoritesContainer)
		: hideFavoriteCard(currentQuote.quote);

}

generateButton.addEventListener("click", generateRandomQuote);
toggleFavoriteButton.addEventListener("click", toggleFavorite);