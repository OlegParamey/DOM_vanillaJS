const express = require("express");
const cors = require("cors");
const quotes = require("./data/quotes");
const app = express();
const PORT = 3000;

const corsOptions = {
	// default cross-origin value for CORS
	origin: "*",
	// origin property can contain multiple values
	// origin: ["http://192.168.137.101:8080", "..." ,"http://localhost:8080"],
};

app.use(cors(corsOptions));

function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}

app.get("/quotes/random-single", (req, res) => {
	const randomQuote = getRandomQuote();
	res.json(randomQuote);
});

app.listen(PORT, () => {
	console.log(`Quotes API service is running on port ${PORT}`);
});
