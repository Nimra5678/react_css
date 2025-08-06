import { useState, useEffect } from "react";

function useCurrencyConverter(currency) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let url = fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );
    url
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAmount(data[currency]);
        console.log(data);
      })
      .catch((err) => console.error("Something went wrong:", err));
  }, [currency]);
  return amount;
}

export default useCurrencyConverter;
