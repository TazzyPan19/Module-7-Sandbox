import { useEffect, useState } from "react";
import { bitcoinRateData } from "../data/BitcoinRateData";

export function BitcoinRates() {
  // NOTE STATES AND VARIABLES
  const [currency, setCurrency] = useState(bitcoinRateData[0]);
  const [rate, setRate] = useState(0);
  
  const options = bitcoinRateData.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  // NOTE FUNCTIONS
  useEffect(() => {
    console.log("The current currency is: ", currency);
    getAPIData();
}, [currency]);

  async function getAPIData() {
    await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRate(data.bitcoin[currency.toLowerCase()]);
      } )
      .catch(error => console.error(error.message))
  }

  // NOTE RETURNS
  return (
    <div className="BitcoinRates componentBox">
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div>
        1 Bitcoin equals to {rate} {currency}.
      </div>
    </div>
  );
}
