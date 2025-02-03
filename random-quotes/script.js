const quotes = [
	{
		quote: "The only way to do great work is to love what you do",
		author: "Steve Jobs",
	},
	{
		quote: "Innovation distinguishes between a leader and a follower",
		author: "Steve Jobs",
	},
	{
		quote: "Your time is limited, so don't waste it living someone else's life",
		author: "Steve Jobs",
	},
	{
		quote: "Stay hungry, stay foolish",
		author: "Steve Jobs",
	},
	{
		quote: "Democracy is the worst form of government, except for all the others that have been tried",
		author: "Winston Churchill",
	},
	{
		quote: "Injustice anywhere is a threat to justice everywhere",
		author: "Martin Luther King Jr.",
	},
	{
		quote: "Ask not what your country can do for you – ask what you can do for your country",
		author: "John F. Kennedy",
	},
	{
		quote: "The only thing we have to fear is fear itself",
		author: "Franklin D. Roosevelt",
	},
	{
		quote: "Politics is war without bloodshed while war is politics with bloodshed",
		author: "Mao Zedong",
	},
	{
		quote: "Freedom is never more than one generation away from extinction",
		author: "Ronald Reagan",
	},
	{
		quote: "The ballot is stronger than the bullet",
		author: "Abraham Lincoln",
	},
	{
		quote: "Power tends to corrupt, and absolute power corrupts absolutely",
		author: "Lord Acton",
	},
	{
		quote: "To walk safely through the maze of human life, one needs the light of wisdom and the guidance of virtue",
		author: "Napoleon Bonaparte",
	},
	{
		quote: "A leader is a dealer in hope",
		author: "Napoleon Bonaparte",
	},
];

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
