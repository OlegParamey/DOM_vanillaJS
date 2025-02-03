import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-btn");
const quoteAuthorElement = document.getElementById("quote-author");
let lastIndex = -1;
let randomIndex = -1;

function generateRandomQuote() {
	while (lastIndex == randomIndex) {
		randomIndex = Math.floor(Math.random() * quotes.length);
	}
	lastIndex = randomIndex;
	const randomQuote = quotes[randomIndex];
	quoteElement.textContent = randomQuote.quote;
	quoteAuthorElement.textContent = randomQuote.author;
}

generateButton.addEventListener("click", generateRandomQuote);
