import { hideFavoriteBtn, showFavoriteCard, removeFavoriteCard, toggleFavoriteCard, showFavoriteBtn } from './src/handlers/favorites.js';
import { displayCurrentQuote } from './src/handlers/currentQuote.js';
import { localStorageSetItem, localStorageGetItem } from './src/utils/localStorage.js';
import { getRandomQuote } from './src/handlers/randomQuotes.js';
import { removeObjectFromArrayById } from './src/utils/array.js';

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTES_KEY = "favoriteQuotes";

const randomQuoteBtn = document.getElementById("random-quote-btn");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuote = null;
const favoriteQuotes = [];

function removeFavoriteQuote(id) {
	// REMOVE FAVORITE QUOTE
	// Removing from favorites current quote by ckicking on the card remove from favorites button
	if (id === currentQuote.id) {
		toggleCurrentQuote()
	} else {
		// Removing from favorites quote which is not current quote
		// Sync app state by removing favorite quote from the favorite quotes array
		removeObjectFromArrayById(favoriteQuotes, id)

		// Remove favorite card from the UI
		removeFavoriteCard(id);
		// Save favoite quotes to the local storage
		localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
	}
	// // The way to find current quote in the HTML in the other module
	// const currentQuote = document.querySelector("[data-current-quote-id]")
	// const currentQuoteId = currentQuote.dataset.currentQuoteId;
}

function toggleCurrentQuote() {
	// CURERNT QUOTE UPDATE
	// sync app state and toggle isFavorite of the current quote
	currentQuote.isFavorite = !currentQuote.isFavorite
	// update the UI by toglging favorite Icon (no need to display current quote again)
	showFavoriteBtn(currentQuote.isFavorite);
	// Save current quote to the local storage
	localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);

	// FAVORITE QUOTES UPDATE
	// sync app state and update favoriteQuotes array
	if (currentQuote.isFavorite) {
		favoriteQuotes.push({ ...currentQuote })
	} else {
		removeObjectFromArrayById(favoriteQuotes, currentQuote.id)
	}
	// update UI by adding or removing favorite card
	toggleFavoriteCard(currentQuote, favoritesContainer);
	// Save favoite quotes to the local storage
	localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes);
}

function setCurrentQuote(quote) {
	// SET CURRENT QUOTE WHEN LOADED FROM LOCAL STORAGE OR RECIEVED RANDOMLY
	// Change app state and write copy of the quote to the currentQuote
	currentQuote = { ...quote };
	// Check if id of the current quote is among the favorite quotes. If so, set isFavorite to true
	currentQuote.isFavorite = !!favoriteQuotes.find((favoriteQuote) => favoriteQuote.id === currentQuote.id);
	// Show current quote in the UI
	displayCurrentQuote(currentQuote);
	// Display favorite icon and change its state
	showFavoriteBtn(currentQuote.isFavorite);
	// Save current quote to the local storage
	localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote);
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", toggleCurrentQuote);

randomQuoteBtn.addEventListener("click", () =>
	setCurrentQuote(getRandomQuote())
);

function init() {

	const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
	if (favoriteQuotesFromStorage) {
		favoriteQuotesFromStorage.forEach((quote) => {
			favoriteQuotes.push({ ...quote });
			showFavoriteCard(quote, favoritesContainer)
		});
	};

	const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
	if (currentQuoteFromStorage) {
		setCurrentQuote(currentQuoteFromStorage);
	}
};

window.addEventListener("load", init);


export { quoteFavoriteBtn, removeFavoriteQuote };