import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
	static getRandomQuote() {
		const randomIndex = MathUtils.generateRandomInt(quotes.length);
		const { id, text, author } = quotes[randomIndex];
		return new Quote(id, text, author);
	}

	static async getRandomQuoteViaPublicAPI() {
		const url = "https://quoteslate.vercel.app/api/quotes/random";
		const options = { headers: { "Content-Type": "application/json" } };
		try {
			const res = await fetch(url, options);
			const data = await res.json();
			const { id, quote: text, author } = data;
			return new Quote(id, text, author);
		} catch (error) {
			console.error(error);
		}
	}

	static async getRandomQuoteViaOwnAPI() {
		const url = "http://192.168.137.101:3000/quotes/random-single";
		const options = { headers: { "Content-Type": "application/json" } };
		try {
			const res = await fetch(url, options);
			const quote = await res.json();
			return new Quote(quote.id, quote.text, quote.author);
		} catch (error) {
			console.error(error);
		}
	}
}
export default RandomQuote;
