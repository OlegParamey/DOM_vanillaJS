const quotes = [
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Innovation distinguishes between a leader and a follower. - Steve Jobs",
	"Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
	"Stay hungry, stay foolish. - Steve Jobs",
];

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-btn");
let lastIndex = -1;
let randomIndex = -1;

function generateRandomQuote() {
	while (lastIndex == randomIndex) {
		randomIndex = Math.floor(Math.random() * quotes.length);
	}
	lastIndex = randomIndex;
	const randomQuote = quotes[randomIndex];
	quoteElement.textContent = randomQuote;
}

generateButton.addEventListener("click", generateRandomQuote);
