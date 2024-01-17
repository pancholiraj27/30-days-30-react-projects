import React, { useState } from "react";

const QuoteGen = () => {
  const [quoteData, setQuoteData] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setQuoteData(data);
    });

  const randomNumber = () => {
    const rNumber = Math.floor(Math.random() * quoteData.length);
    setRandomIndex(rNumber);
  };

  return (
    <div className="quoteGenerator">
      <h1>Random Quote Generator</h1>
      {quoteData.length > 0 ? (
        <div>
          <p>{quoteData[randomIndex].text}</p>
          <span>{quoteData[randomIndex].author}</span>
        </div>
      ) : null}
      <button onClick={randomNumber}>Show Quote</button>
    </div>
  );
};

export default QuoteGen;
