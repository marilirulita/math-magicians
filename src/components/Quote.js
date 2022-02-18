import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setupQuote] = useState([]);
  const r = Math.floor(Math.random() * (1643 - 0) + 0);

  const getQuote = async () => {
    const getData = await fetch('https://type.fit/api/quotes');
    const response = await getData.json();
    const random = response[r];
    setupQuote(random);
  };

  useEffect(() => {
    //    let ignore = false;
    getQuote();
    //   return () => ignore = true};
  }, []);

  return (
    <div className="containerQuote">
      <p>
        {quote.text}
        <strong>
          {' '}
          -
          {quote.author}
        </strong>
      </p>
    </div>
  );
};

export default Quote;
