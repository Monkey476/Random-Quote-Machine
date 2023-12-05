document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
      { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laudantium?", author: "Author 1" },
      { text: "Otro texto para el quote.", author: "Author 2" },
      // Agrega más quotes según sea necesario
    ];

    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function updateQuote() {
      const quoteContainer = document.querySelector(".quote-text li");
      const authorContainer = document.getElementById("new-click");

      const { text, author } = getRandomQuote();

      quoteContainer.textContent = text;
      authorContainer.textContent = `-${author}`;
    }

    document.getElementById("new-quote").addEventListener("click", updateQuote);

    updateQuote();
  });