import { handleQuote } from './src/handlers/quote.js';

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", handleQuote);