import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    
    const fetchData = () => {
      fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then((responseData) => {
          localStorage.setItem('myData', JSON.stringify(responseData));
          setData(responseData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      console.log("from local")
      setData(JSON.parse(storedData));
    } else {
      console.log("from api")
      fetchData();
    }
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIndex].text);
  };

  return (
    <div>
      <h1>Magic Quote Generator</h1>
      <p>{randomQuote}</p>
      <button onClick={generateRandomQuote}>Show New Quote</button>
    </div>
  );
};

export default Quotes;