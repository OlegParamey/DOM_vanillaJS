import quotes from "../data/quotes.js";
import { handleFavorite } from "./favorites.js";
import { generateRandomInt } from "../utils.js";

let currentQuote = null;

function handleQuote() {
  const randomQuote = chooseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote, currentQuote };