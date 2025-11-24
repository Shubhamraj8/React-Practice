import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://open.er-api.com/v6/latest/${currency.toUpperCase()}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.rates); // API returns rates under json.rates
      })
      .catch((err) => console.error("API Error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
